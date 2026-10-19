import React from 'react';

export const RightSidebar: React.FC = () => {
  return (
    <aside className="space-y-4">
      {/* Card 1: Rotina Laboratorial de Pré-Natal */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4.5 border border-slate-200/80 dark:border-slate-800 shadow-premium transition-colors">
        <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm flex-shrink-0">
            <i className="fa-solid fa-vial-virus"></i>
          </div>
          <div>
            <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white leading-tight">
              Rotina Laboratorial
            </h3>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
              Ministério da Saúde / FEBRASGO
            </p>
          </div>
        </div>

        <div className="space-y-2.5 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-sky-700 dark:text-sky-300 text-[11px] uppercase">
                1º Trimestre (&lt;14s)
              </span>
              <span className="text-[10px] font-mono text-slate-400">Inicial</span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Tipagem ABO/Rh, Coombs Indireto, Hemograma, Glicemia jejum, TSH, Urina I + Cultura, VDRL, HIV, HBsAg, Toxoplasmose.
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-teal-700 dark:text-teal-300 text-[11px] uppercase">
                2º Trimestre (24–28s)
              </span>
              <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400 font-bold">TOTG 75g</span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>TOTG 75g (GDM):</strong> Jejum &lt; 92, 1h &lt; 180, 2h &lt; 153 mg/dL. Repetir Coombs indireto se Rh negativo.
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-rose-700 dark:text-rose-300 text-[11px] uppercase">
                3º Trimestre (28–37s)
              </span>
              <span className="text-[10px] font-mono text-rose-600 dark:text-rose-400 font-bold">Strepto B</span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Hemograma, VDRL, HIV, Hepatite B, <strong>Swab Vaginal/Retal para Estreptococo do Grupo B (35–37s)</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2: Sinais de Alerta Obstétrico */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4.5 border border-slate-200/80 dark:border-slate-800 shadow-premium transition-colors">
        <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400 flex items-center justify-center text-sm flex-shrink-0">
            <i className="fa-solid fa-triangle-exclamation"></i>
          </div>
          <div>
            <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white leading-tight">
              Sinais de Alerta
            </h3>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
              Encaminhamento Imediato
            </p>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/40 flex items-start gap-2">
            <i className="fa-solid fa-droplet text-rose-600 mt-0.5"></i>
            <div>
              <div className="font-bold text-rose-900 dark:text-rose-200">Sangramento Vaginal</div>
              <div className="text-[10px] text-slate-600 dark:text-slate-400">
                Suspeita de descolamento prematuro (DPP) ou placenta prévia.
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/40 flex items-start gap-2">
            <i className="fa-solid fa-head-side-virus text-rose-600 mt-0.5"></i>
            <div>
              <div className="font-bold text-rose-900 dark:text-rose-200">Cefaleia / Escotomas / Epigastralgia</div>
              <div className="text-[10px] text-slate-600 dark:text-slate-400">
                Sinais iminentes de eclâmpsia. Aferir pressão arterial de urgência.
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 flex items-start gap-2">
            <i className="fa-solid fa-water text-amber-600 mt-0.5"></i>
            <div>
              <div className="font-bold text-amber-900 dark:text-amber-200">Perda Líquida Contínua (RPMO)</div>
              <div className="text-[10px] text-slate-600 dark:text-slate-400">
                Líquido amniótico claro ou meconial; risco de infecção intrauterina.
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 flex items-start gap-2">
            <i className="fa-solid fa-person-breastfeeding text-amber-600 mt-0.5"></i>
            <div>
              <div className="font-bold text-amber-900 dark:text-amber-200">Hipocinesia Fetal (&gt; 28s)</div>
              <div className="text-[10px] text-slate-600 dark:text-slate-400">
                &lt; 6 movimentos em 2 horas de repouso pós-prandial. Realizar CTG/PBF.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Curva de McDonald (AU por IG) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4.5 border border-slate-200/80 dark:border-slate-800 shadow-premium transition-colors">
        <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm flex-shrink-0">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <div>
            <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white leading-tight">
              Curva de McDonald (AU)
            </h3>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
              Faixas esperadas P10 – P90
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-center">
            <span className="text-[10px] font-sans font-semibold text-slate-400 block">20 Semanas</span>
            <span className="font-bold text-slate-800 dark:text-slate-200">18 – 22 cm</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-center">
            <span className="text-[10px] font-sans font-semibold text-slate-400 block">24 Semanas</span>
            <span className="font-bold text-slate-800 dark:text-slate-200">22 – 26 cm</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-center">
            <span className="text-[10px] font-sans font-semibold text-slate-400 block">28 Semanas</span>
            <span className="font-bold text-slate-800 dark:text-slate-200">26 – 30 cm</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-center">
            <span className="text-[10px] font-sans font-semibold text-slate-400 block">32 Semanas</span>
            <span className="font-bold text-slate-800 dark:text-slate-200">30 – 33 cm</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-center">
            <span className="text-[10px] font-sans font-semibold text-slate-400 block">36 Semanas</span>
            <span className="font-bold text-slate-800 dark:text-slate-200">32 – 36 cm</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-center">
            <span className="text-[10px] font-sans font-semibold text-slate-400 block">40 Semanas</span>
            <span className="font-bold text-slate-800 dark:text-slate-200">34 – 38 cm</span>
          </div>
        </div>
        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2">
          <i className="fa-solid fa-circle-info mr-1"></i> AU &lt; P10: investigar RCF / oligoidrâmnio. AU &gt; P90: macrossomia / polidrâmnio.
        </p>
      </div>
    </aside>
  );
};
