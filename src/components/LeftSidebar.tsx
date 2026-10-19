import React from 'react';

export const LeftSidebar: React.FC = () => {
  return (
    <aside className="space-y-4">
      {/* Card 1: Marcos USG Transvaginal Precoce */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4.5 border border-slate-200/80 dark:border-slate-800 shadow-premium transition-colors">
        <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 flex items-center justify-center text-sm flex-shrink-0">
            <i className="fa-solid fa-circle-nodes"></i>
          </div>
          <div>
            <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white leading-tight">
              Ecografia Precoce (TV)
            </h3>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
              Marcos seminais de datação
            </p>
          </div>
        </div>

        <div className="space-y-2.5 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-start justify-between gap-2">
            <div>
              <div className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span> Saco Gestacional (SG)
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Visível com hCG ≥ 1.000–2.000 mUI/mL
              </div>
            </div>
            <span className="font-mono font-bold text-[11px] text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/80 px-2 py-0.5 rounded-md flex-shrink-0">
              4–5 sem
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-start justify-between gap-2">
            <div>
              <div className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span> Vesícula Vitelina (VV)
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Confirma gestação intrauterina real
              </div>
            </div>
            <span className="font-mono font-bold text-[11px] text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/80 px-2 py-0.5 rounded-md flex-shrink-0">
              5–5,5 sem
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-start justify-between gap-2">
            <div>
              <div className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Embrião com BCF
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Obrigatório com CCN ≥ 7 mm
              </div>
            </div>
            <span className="font-mono font-bold text-[11px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded-md flex-shrink-0">
              6–6,5 sem
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-brand-50/60 dark:bg-brand-950/40 border border-brand-200/70 dark:border-brand-800/60 text-[11px] text-brand-900 dark:text-brand-300">
            <div className="font-bold flex items-center gap-1 mb-0.5">
              <i className="fa-solid fa-heart-pulse text-brand-600"></i> Frequência Cardíaca Fetal (FCF)
            </div>
            <div>6s: 100–115 bpm • 9s: 140–170 bpm • &gt;12s: 110–160 bpm</div>
          </div>
        </div>
      </div>

      {/* Card 2: Critérios de Redatação ACOG nº 700 */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4.5 border border-slate-200/80 dark:border-slate-800 shadow-premium transition-colors">
        <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="w-8 h-8 rounded-xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center text-sm flex-shrink-0">
            <i className="fa-solid fa-scale-balanced"></i>
          </div>
          <div>
            <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white leading-tight">
              Redatação ACOG 700
            </h3>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
              Tolerância DUM vs USG
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200/70 dark:border-slate-700/70 text-[11px]">
          <table className="w-full text-left">
            <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
              <tr>
                <th className="p-2">Idade Gest.</th>
                <th className="p-2">Método</th>
                <th className="p-2 text-right">Tolerância</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                <td className="p-2 font-sans font-semibold text-slate-800 dark:text-slate-200">≤ 8 sem 6d</td>
                <td className="p-2 text-slate-500 font-sans">CCN</td>
                <td className="p-2 text-right font-bold text-amber-600 dark:text-amber-400">&gt; 5 dias</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                <td className="p-2 font-sans font-semibold text-slate-800 dark:text-slate-200">9s – 13s 6d</td>
                <td className="p-2 text-slate-500 font-sans">CCN</td>
                <td className="p-2 text-right font-bold text-amber-600 dark:text-amber-400">&gt; 7 dias</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                <td className="p-2 font-sans font-semibold text-slate-800 dark:text-slate-200">14s – 15s 6d</td>
                <td className="p-2 text-slate-500 font-sans">Biometria</td>
                <td className="p-2 text-right font-bold text-amber-600 dark:text-amber-400">&gt; 7 dias</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                <td className="p-2 font-sans font-semibold text-slate-800 dark:text-slate-200">16s – 21s 6d</td>
                <td className="p-2 text-slate-500 font-sans">Biometria</td>
                <td className="p-2 text-right font-bold text-amber-600 dark:text-amber-400">&gt; 10 dias</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                <td className="p-2 font-sans font-semibold text-slate-800 dark:text-slate-200">22s – 27s 6d</td>
                <td className="p-2 text-slate-500 font-sans">Biometria</td>
                <td className="p-2 text-right font-bold text-amber-600 dark:text-amber-400">&gt; 14 dias</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                <td className="p-2 font-sans font-semibold text-slate-800 dark:text-slate-200">≥ 28 semanas</td>
                <td className="p-2 text-slate-500 font-sans">Biometria</td>
                <td className="p-2 text-right font-bold text-amber-600 dark:text-amber-400">&gt; 21 dias</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 italic">
          * Se a discordância superar a tolerância, adote o USG como datação oficial.
        </p>
      </div>

      {/* Card 3: Classificação do Termo */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4.5 border border-slate-200/80 dark:border-slate-800 shadow-premium transition-colors">
        <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="w-8 h-8 rounded-xl bg-coral-50 dark:bg-coral-950/70 text-coral-600 dark:text-coral-400 flex items-center justify-center text-sm flex-shrink-0">
            <i className="fa-solid fa-flag-checkered"></i>
          </div>
          <div>
            <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white leading-tight">
              Classificação do Termo
            </h3>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
              Consenso ACOG / SMFM
            </p>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          <div className="p-2 rounded-xl border border-sky-200/70 dark:border-sky-800/70 bg-sky-50/50 dark:bg-sky-950/30 flex justify-between items-center">
            <span className="font-bold text-sky-800 dark:text-sky-300">Termo Precoce</span>
            <span className="font-mono font-bold text-sky-700 dark:text-sky-400">37s0d – 38s6d</span>
          </div>
          <div className="p-2 rounded-xl border border-emerald-300 dark:border-emerald-700 bg-emerald-50/60 dark:bg-emerald-950/40 flex justify-between items-center ring-1 ring-emerald-500/20">
            <span className="font-bold text-emerald-800 dark:text-emerald-300">Termo Pleno (Ideal)</span>
            <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">39s0d – 40s6d</span>
          </div>
          <div className="p-2 rounded-xl border border-amber-200/70 dark:border-amber-800/70 bg-amber-50/50 dark:bg-amber-950/30 flex justify-between items-center">
            <span className="font-bold text-amber-800 dark:text-amber-300">Termo Tardio</span>
            <span className="font-mono font-bold text-amber-700 dark:text-amber-400">41s0d – 41s6d</span>
          </div>
          <div className="p-2 rounded-xl border border-rose-200/70 dark:border-rose-800/70 bg-rose-50/50 dark:bg-rose-950/30 flex justify-between items-center">
            <span className="font-bold text-rose-800 dark:text-rose-300">Pós-Termo</span>
            <span className="font-mono font-bold text-rose-700 dark:text-rose-400">≥ 42s0d</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
