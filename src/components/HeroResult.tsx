import React, { useState } from 'react';
import { CalculationResult } from '../types/gestational';
import {
  addDays,
  formatDateBR,
  formatNumberBR,
  getStatusViabilidade,
} from '../utils/dateCalculations';

interface HeroResultProps {
  calc: CalculationResult;
  onCopySOAP: () => void;
}

export const HeroResult: React.FC<HeroResultProps> = ({ calc, onCopySOAP }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopySOAP();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const igDisplay =
    calc.metodo === 'AU' && calc.semanasDecimal !== undefined
      ? `${formatNumberBR(calc.semanasDecimal, 1)} semanas`
      : `${calc.semanas} semanas e ${calc.dias} dias`;

  const semanasTotais = calc.semanas + calc.dias / 7;
  const percentProgresso = Math.min(Math.max((semanasTotais / 40) * 100, 0), 100);
  const diasTotais =
    calc.totalDias !== undefined ? calc.totalDias : Math.round(semanasTotais * 7);
  const infoViabilidade = getStatusViabilidade(calc.semanas);

  const metaTermoData = calc.dumBase ? addDays(calc.dumBase, 37 * 7) : null;

  return (
    <article className="hero-result-card relative rounded-3xl p-5 sm:p-6 shadow-premium overflow-hidden transition-all duration-300">
      {/* Top badges & actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shadow-xs ${calc.trimestre.badgeBg}`}
          >
            <span className={`w-2 h-2 rounded-full ${calc.trimestre.dotColor}`}></span>
            {calc.trimestre.nome} • {calc.trimestre.sub}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-xs">
            Método: <strong className="text-brand-700 dark:text-brand-400">{calc.tituloMetodo}</strong>
          </span>
        </div>

        <div className="flex items-center gap-2 no-print">
          <button
            type="button"
            onClick={handleCopy}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-xs transition-all duration-200 active:scale-95 cursor-pointer border ${
              copied
                ? 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 scale-105'
                : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border-slate-300 dark:border-slate-700 hover:border-brand-300'
            }`}
          >
            <i
              className={`transition-transform duration-200 ${
                copied
                  ? 'fa-solid fa-check text-emerald-600 dark:text-emerald-400 scale-110'
                  : 'fa-regular fa-copy text-brand-600 dark:text-brand-400'
              }`}
            ></i>
            <span>{copied ? 'Copiado!' : 'Copiar SOAP'}</span>
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            aria-label="Imprimir relatório clínico"
            className="p-1.5 px-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-slate-400 rounded-xl text-xs shadow-sm transition-all duration-150 active:scale-95 cursor-pointer"
          >
            <i className="fa-solid fa-print"></i>
          </button>
        </div>
      </div>

      {/* Main Gestational Age Value & Viability */}
      <div className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
            Idade Gestacional Atual
          </span>
          <div className="flex items-baseline gap-2.5 flex-wrap">
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight tabular-nums drop-shadow-xs transition-all">
              {igDisplay}
            </h3>
            {calc.aproximado && (
              <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800 px-2.5 py-0.5 rounded-md">
                Estimativa Clínica
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm text-slate-700 dark:text-slate-200 transition-colors">
          <i className={`${infoViabilidade.icon} ${infoViabilidade.cor} text-sm`}></i>
          <span>{infoViabilidade.status}</span>
        </div>
      </div>

      {/* Grid 4 Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:border-brand-400 dark:hover:border-brand-600">
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center mb-1">
            <i className="fa-regular fa-calendar-check text-brand-600 dark:text-brand-400 mr-1.5"></i> DPP
          </span>
          <div className="font-display font-bold text-lg text-slate-900 dark:text-white tabular-nums">
            {calc.dpp ? formatDateBR(calc.dpp) : '—'}
          </div>
          <div className="text-[11px] text-brand-700 dark:text-brand-400 mt-0.5 font-bold">
            {calc.diasRestantesDPP !== null
              ? calc.diasRestantesDPP >= 0
                ? `${calc.diasRestantesDPP}d restantes`
                : `${Math.abs(calc.diasRestantesDPP)}d pós-DPP`
              : 'Requer DUM/USG'}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:border-teal-400 dark:hover:border-teal-600">
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center mb-1">
            <i className="fa-solid fa-chart-pie text-teal-600 dark:text-teal-400 mr-1.5"></i> Progresso
          </span>
          <div className="font-display font-bold text-lg text-slate-900 dark:text-white tabular-nums">
            {percentProgresso.toFixed(1)}%
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
            Rumo às 40 semanas
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:border-indigo-400 dark:hover:border-indigo-600">
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center mb-1">
            <i className="fa-solid fa-clock-rotate-left text-indigo-500 dark:text-indigo-400 mr-1.5"></i> Dias Totais
          </span>
          <div className="font-display font-bold text-lg text-slate-900 dark:text-white tabular-nums">
            {diasTotais} dias
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
            ~{Math.floor(diasTotais / 30)} meses
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:border-rose-400 dark:hover:border-rose-600">
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center mb-1">
            <i className="fa-solid fa-flag-checkered text-rose-500 mr-1.5"></i> Meta de Termo
          </span>
          <div className="font-display font-bold text-lg text-slate-900 dark:text-white tabular-nums">
            {metaTermoData ? formatDateBR(metaTermoData) : '37 semanas'}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
            Início do termo (37s)
          </div>
        </div>
      </div>

      {/* Trilha de Maturação Gestacional */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between text-xs font-bold mb-2">
          <span className="text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
            <i className="fa-solid fa-route text-brand-600 dark:text-brand-400"></i> Trilha de Maturação Gestacional
          </span>
          <span className="font-mono text-brand-700 dark:text-brand-300 font-bold">
            {percentProgresso.toFixed(1)}%
          </span>
        </div>

        <div className="relative pt-6 pb-2">
          <div className="h-3.5 w-full bg-slate-200/90 dark:bg-slate-800 rounded-full overflow-hidden flex shadow-inner border border-slate-300/60 dark:border-slate-700/60">
            <div
              className="h-full bg-gradient-to-r from-sky-400 to-sky-600 transition-all duration-500 ease-out"
              style={{ width: '32.5%' }}
              title="1º Tri (até 13s)"
            ></div>
            <div
              className="h-full bg-gradient-to-r from-teal-400 to-emerald-600 transition-all duration-500 ease-out"
              style={{ width: '35%' }}
              title="2º Tri (13 a 27s)"
            ></div>
            <div
              className="h-full bg-gradient-to-r from-rose-400 to-rose-600 transition-all duration-500 ease-out"
              style={{ width: '32.5%' }}
              title="3º Tri (27 a 40s)"
            ></div>
          </div>

          {/* Needle pin */}
          <div
            className="absolute top-0 transform -translate-x-1/2 flex flex-col items-center pointer-events-none transition-all duration-500 ease-out z-10"
            style={{ left: `${percentProgresso}%` }}
          >
            <span className="px-2 py-0.5 rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[10px] font-extrabold shadow-md mb-0.5 whitespace-nowrap transition-transform">
              Você está aqui ({calc.semanas}s {calc.dias}d)
            </span>
            <div className="w-4 h-4 rounded-full bg-brand-500 border-2 border-white dark:border-slate-900 shadow-md needle-pulse"></div>
          </div>
        </div>

        <div className="flex justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1.5 font-medium">
          <span>0 sem</span>
          <span>13 sem (T2)</span>
          <span>27 sem (T3)</span>
          <span>37s (Termo)</span>
          <span>40s (DPP)</span>
        </div>
      </div>
    </article>
  );
};
