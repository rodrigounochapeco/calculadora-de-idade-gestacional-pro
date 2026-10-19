/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { CalculationMethod, CalculationResult } from './types/gestational';
import { Header } from './components/Header';
import { LeftSidebar } from './components/LeftSidebar';
import { RightSidebar } from './components/RightSidebar';
import { MethodTabs } from './components/MethodTabs';
import { MethodForms } from './components/MethodForms';
import { HeroResult } from './components/HeroResult';
import { ImcCard } from './components/ImcCard';
import { TimelineSchedule } from './components/TimelineSchedule';
import { ProtocolModal } from './components/ProtocolModal';
import { Toast } from './components/Toast';
import {
  addDays,
  calcularTrimestre,
  diffInDays,
  formatDateBR,
  formatInputMask,
  formatNumberBR,
  getStartOfDay,
  getStatusViabilidade,
  parseSmartDate,
} from './utils/dateCalculations';

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (darkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  // Active Method state
  const [activeMethod, setActiveMethod] = useState<CalculationMethod>('usg');

  // Input states initialized to match the default 24 weeks case
  const hoje = useMemo(() => getStartOfDay(new Date()), []);
  const initialUSGDate = useMemo(() => formatDateBR(addDays(hoje, -84)), [hoje]);
  const initialDUMDate = useMemo(() => formatDateBR(addDays(hoje, -168)), [hoje]);

  const [dumInput, setDumInput] = useState<string>(initialDUMDate);
  const [usgDateInput, setUsgDateInput] = useState<string>(initialUSGDate);
  const [usgWeeksInput, setUsgWeeksInput] = useState<string>('12');
  const [usgDaysInput, setUsgDaysInput] = useState<string>('0');
  const [auInput, setAuInput] = useState<string>('24');

  // Modal and toast states
  const [isProtocolOpen, setIsProtocolOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 2800);
  }, []);

  // Handlers for DUM
  const handleDumChange = (val: string) => {
    setDumInput(formatInputMask(val));
  };

  const handleDumHoje = () => {
    setDumInput(formatDateBR(hoje));
  };

  const handleDumQuickWeeks = (weeks: number) => {
    const d = addDays(hoje, -(weeks * 7));
    setDumInput(formatDateBR(d));
  };

  // Handlers for USG
  const handleUsgDateChange = (val: string) => {
    setUsgDateInput(formatInputMask(val));
  };

  const handleUsgWeeksChange = (val: string) => {
    setUsgWeeksInput(val);
  };

  const handleUsgDaysChange = (val: string) => {
    setUsgDaysInput(val);
  };

  // Handlers for AU
  const handleAuChange = (val: string) => {
    setAuInput(val);
  };

  // Parsing & Calculation Logic
  const { calculation, dumError, usgDateError, usgWeeksError, usgDaysError, auError, alerts } =
    useMemo(() => {
      const alertList: { id: string; type: 'warning' | 'error'; message: string }[] = [];
      let dErr: string | null = null;
      let uDateErr: string | null = null;
      let uWeeksErr: string | null = null;
      let uDaysErr: string | null = null;
      let aErr: string | null = null;

      // Parse DUM if available
      let parsedDum: Date | null = null;
      if (dumInput.trim()) {
        const res = parseSmartDate(dumInput, hoje);
        if (!res.valid) {
          dErr = res.error || 'Data inválida';
        } else if (res.date) {
          const diff = diffInDays(hoje, res.date);
          if (diff < 0) {
            dErr = 'A data não pode ser futura';
          } else if (diff > 300) {
            dErr = 'Data fora do período gestacional esperado (>300 dias)';
          } else {
            parsedDum = res.date;
          }
        }
      }

      // Parse USG if available
      let parsedUsgDumBase: Date | null = null;
      let usgResult: CalculationResult | null = null;

      if (usgDateInput.trim() || usgWeeksInput.trim() || usgDaysInput.trim()) {
        const resData = parseSmartDate(usgDateInput, hoje);
        let hasUSGError = false;

        if (!resData.valid) {
          uDateErr = resData.error || 'Data inválida';
          hasUSGError = true;
        } else if (resData.date) {
          const sem = parseInt(usgWeeksInput, 10);
          if (isNaN(sem) || usgWeeksInput.trim() === '' || sem < 0 || sem > 42) {
            uWeeksErr = '0 a 42 sem';
            hasUSGError = true;
          }

          let dias = parseInt(usgDaysInput, 10);
          if (usgDaysInput.trim() === '') {
            dias = 0;
          } else if (isNaN(dias) || dias < 0 || dias > 6) {
            uDaysErr = '0 a 6 dias';
            hasUSGError = true;
          }

          if (!hasUSGError && resData.date) {
            const dataUSG = resData.date;
            const igExameDias = sem * 7 + dias;
            const diasDesdeExame = diffInDays(hoje, dataUSG);
            const igAtualDias = igExameDias + diasDesdeExame;

            const dumProvavel = addDays(dataUSG, -igExameDias);
            const dpp = addDays(dumProvavel, 280);
            const semanasAtual = Math.floor(igAtualDias / 7);
            const diasAtual = igAtualDias % 7;
            const diasRestantesDPP = diffInDays(dpp, hoje);
            const trimestre = calcularTrimestre(semanasAtual);

            parsedUsgDumBase = dumProvavel;

            usgResult = {
              metodo: 'USG',
              tituloMetodo: 'Ultrassonografia',
              semanas: semanasAtual,
              dias: diasAtual,
              totalDias: igAtualDias,
              dpp,
              diasRestantesDPP,
              dumBase: dumProvavel,
              trimestre,
              aproximado: false,
            };
          }
        }
      }

      // Check discrepancy between DUM and USG
      if (parsedDum && parsedUsgDumBase) {
        const diffBases = Math.abs(diffInDays(parsedDum, parsedUsgDumBase));
        if (diffBases >= 8) {
          alertList.push({
            id: 'discrepancy',
            type: 'warning',
            message: `Discrepância de ${diffBases} dias entre DUM e USG (≥ 8 dias). Recomenda-se redatar a idade gestacional pela ultrassonografia (ACOG 700).`,
          });
        }
      }

      // Build active calculation based on selected method
      let activeCalc: CalculationResult | null = null;

      if (activeMethod === 'dum') {
        if (parsedDum) {
          const diffTotal = diffInDays(hoje, parsedDum);
          const semanas = Math.floor(diffTotal / 7);
          const dias = diffTotal % 7;
          const dpp = addDays(parsedDum, 280);
          const diasRestantesDPP = diffInDays(dpp, hoje);
          const trimestre = calcularTrimestre(semanas);

          activeCalc = {
            metodo: 'DUM',
            tituloMetodo: 'Data da Última Menstruação',
            semanas,
            dias,
            totalDias: diffTotal,
            dpp,
            diasRestantesDPP,
            dumBase: parsedDum,
            trimestre,
            aproximado: false,
          };

          if (semanas > 42) {
            alertList.push({
              id: 'post-term',
              type: 'warning',
              message:
                'Idade gestacional superior a 42 semanas. Avaliar risco de pós-datismo e protocolo de indução.',
            });
          }
        }
      } else if (activeMethod === 'usg') {
        if (usgResult) {
          activeCalc = usgResult;
          if (activeCalc.semanas > 42) {
            alertList.push({
              id: 'post-term',
              type: 'warning',
              message:
                'Idade gestacional superior a 42 semanas. Avaliar risco de pós-datismo e protocolo de indução.',
            });
          }
        }
      } else if (activeMethod === 'au') {
        const cleanAu = auInput.replace(',', '.').trim();
        const numAU = parseFloat(cleanAu);
        if (isNaN(numAU) || numAU <= 0) {
          aErr = 'Informe uma medida válida';
        } else {
          const igSemanasFloat = Math.round(((numAU * 8) / 7) * 10) / 10;
          const semanasInteiras = Math.floor(igSemanasFloat);
          const diasResto = Math.round((igSemanasFloat - semanasInteiras) * 7);

          if (numAU < 10 || numAU > 45) {
            alertList.push({
              id: 'au-range',
              type: 'warning',
              message: `AU de ${formatNumberBR(
                numAU,
                1
              )} cm fora do padrão comum (10–45 cm). Avaliar volume de líquido amniótico e gemelaridade.`,
            });
          }

          const trimestre = calcularTrimestre(semanasInteiras);

          // Approximate DUM base for schedule if AU is used
          const approxDumBase = addDays(hoje, -Math.round(igSemanasFloat * 7));
          const approxDpp = addDays(approxDumBase, 280);

          activeCalc = {
            metodo: 'AU',
            tituloMetodo: 'Altura Uterina (McDonald)',
            semanas: semanasInteiras,
            semanasDecimal: igSemanasFloat,
            dias: diasResto,
            totalDias: Math.round(igSemanasFloat * 7),
            dpp: approxDpp,
            diasRestantesDPP: diffInDays(approxDpp, hoje),
            dumBase: approxDumBase,
            trimestre,
            aproximado: true,
          };
        }
      }

      // Default fallback if inputs are empty
      if (!activeCalc) {
        // Fallback default 24s case
        const dumBaseDefault = addDays(hoje, -168);
        const dppDefault = addDays(dumBaseDefault, 280);
        activeCalc = {
          metodo: 'USG',
          tituloMetodo: 'Ultrassonografia',
          semanas: 24,
          dias: 0,
          totalDias: 168,
          dpp: dppDefault,
          diasRestantesDPP: diffInDays(dppDefault, hoje),
          dumBase: dumBaseDefault,
          trimestre: calcularTrimestre(24),
          aproximado: false,
        };
      }

      return {
        calculation: activeCalc,
        dumError: dErr,
        usgDateError: uDateErr,
        usgWeeksError: uWeeksErr,
        usgDaysError: uDaysErr,
        auError: aErr,
        alerts: alertList,
      };
    }, [
      dumInput,
      usgDateInput,
      usgWeeksInput,
      usgDaysInput,
      auInput,
      activeMethod,
      hoje,
    ]);

  // Copy SOAP Report Handler
  const handleCopySOAP = () => {
    const dppStr = calculation.dpp ? formatDateBR(calculation.dpp) : '';
    let relatorio = '';

    if (activeMethod === 'usg' || usgDateInput.trim()) {
      const dataUSG = usgDateInput.trim() || '—';
      const semUSG = usgWeeksInput.trim() || '0';
      const diasUSG = usgDaysInput.trim() || '0';
      relatorio = `# IG: ${calculation.semanas} semanas e ${calculation.dias} dias pelo USG do dia ${dataUSG} com ${semUSG} semanas e ${diasUSG} dias \n# DPP: ${dppStr}`;
    } else if (activeMethod === 'dum') {
      relatorio = `# IG: ${calculation.semanas} semanas e ${calculation.dias} dias pela DUM do dia ${dumInput.trim() || '—'}\n# DPP: ${dppStr}`;
    } else {
      relatorio = `# IG: ${calculation.semanas} semanas e ${calculation.dias} dias pela Altura Uterina (${auInput.trim()} cm)\n# DPP: ${dppStr}`;
    }

    navigator.clipboard
      .writeText(relatorio)
      .then(() => {
        showToast('Relatório SOAP copiado para a área de transferência!');
      })
      .catch(() => {
        showToast('Relatório SOAP copiado!');
      });
  };

  return (
    <div className="bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-sans transition-colors duration-200">
      {/* Top Header */}
      <Header
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenProtocol={() => setIsProtocolOpen(true)}
      />

      {/* Main Full-Width Workstation */}
      <main className="w-full px-3 sm:px-5 lg:px-6 xl:px-8 py-5 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start w-full">
          {/* Left Column: Early Ultrasound & ACOG 700 Table */}
          <div className="lg:col-span-3 space-y-4 order-2 lg:order-1">
            <LeftSidebar />
          </div>

          {/* Central Column: Tabs, Forms, Hero, IMC & Timeline */}
          <section className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            {/* Segmented Control Tabs */}
            <MethodTabs
              activeMethod={activeMethod}
              onChangeMethod={(m) => setActiveMethod(m)}
            />

            {/* Dynamic Banner Alerts */}
            {alerts.length > 0 && (
              <div className="space-y-2" aria-live="polite">
                {alerts.map((al) => (
                  <div
                    key={al.id}
                    role="alert"
                    className="p-3.5 rounded-2xl flex items-start gap-2.5 text-xs font-medium border shadow-sm bg-amber-50/90 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 transition-colors"
                  >
                    <i className="fa-solid fa-triangle-exclamation text-amber-600 dark:text-amber-400 text-sm mt-0.5 flex-shrink-0"></i>
                    <div className="leading-relaxed">
                      <strong>Alerta Clínico:</strong> {al.message}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Input Forms */}
            <MethodForms
              activeMethod={activeMethod}
              dumInput={dumInput}
              dumError={dumError}
              onDumChange={handleDumChange}
              onDumHoje={handleDumHoje}
              onDumQuickWeeks={handleDumQuickWeeks}
              usgDateInput={usgDateInput}
              usgDateError={usgDateError}
              usgWeeksInput={usgWeeksInput}
              usgWeeksError={usgWeeksError}
              usgDaysInput={usgDaysInput}
              usgDaysError={usgDaysError}
              onUsgDateChange={handleUsgDateChange}
              onUsgWeeksChange={handleUsgWeeksChange}
              onUsgDaysChange={handleUsgDaysChange}
              auInput={auInput}
              auError={auError}
              onAuChange={handleAuChange}
            />

            {/* Live Results Region */}
            <div className="space-y-5" aria-live="polite">
              {/* Hero Result Card */}
              <HeroResult calc={calculation} onCopySOAP={handleCopySOAP} />

              {/* IMC Gestacional Recomendado (Atalah) */}
              <ImcCard semanas={calculation.semanas} />

              {/* Timeline Schedule */}
              <TimelineSchedule
                dumBase={calculation.dumBase}
                dpp={calculation.dpp}
                currentWeeks={calculation.semanas}
              />
            </div>
          </section>

          {/* Right Column: Lab Routine, Warning Signs, McDonald Curve */}
          <div className="lg:col-span-3 space-y-4 order-3">
            <RightSidebar />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 py-5 text-xs text-slate-500 dark:text-slate-400 transition-colors no-print">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Apoio à decisão clínica obstétrica • FEBRASGO / ACOG / OMS</span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Estação de Trabalho Multivariada</span>
            <span>•</span>
            <span>Uso assistencial exclusivo por profissionais de saúde habilitados.</span>
          </div>
        </div>
      </footer>

      {/* Protocol Modal */}
      <ProtocolModal
        isOpen={isProtocolOpen}
        onClose={() => setIsProtocolOpen(false)}
      />

      {/* Toast Feedback */}
      <Toast message={toastMessage} />
    </div>
  );
}
