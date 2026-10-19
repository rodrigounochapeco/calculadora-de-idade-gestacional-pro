import React from 'react';
import { getImcReferencia, formatNumberBR } from '../utils/dateCalculations';

interface ImcCardProps {
  semanas: number;
}

export const ImcCard: React.FC<ImcCardProps> = ({ semanas }) => {
  const imcInfo = getImcReferencia(semanas);

  if (!imcInfo.disponivel || !imcInfo.dados) {
    return (
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-premium transition-colors">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm flex-shrink-0">
            <i className="fa-solid fa-weight-scale"></i>
          </div>
          <div>
            <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
              IMC Gestacional Recomendado (Atalah)
            </h3>
            <p className="text-[11px] text-slate-500">{imcInfo.msg}</p>
          </div>
        </div>
      </section>
    );
  }

  const semParaExibir = imcInfo.semanaUsada || semanas;

  return (
    <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-premium space-y-3.5 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 gap-2.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm flex-shrink-0">
            <i className="fa-solid fa-weight-scale"></i>
          </div>
          <div>
            <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
              IMC Gestacional Recomendado (Atalah)
            </h3>
            <p className="text-[11px] text-slate-500">
              Parâmetros de referência para {semParaExibir} semanas {imcInfo.nota ? `(${imcInfo.nota})` : ''}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
        <div className="p-2.5 rounded-2xl bg-sky-50/60 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 transition-colors">
          <span className="block text-[10px] font-bold text-sky-700 dark:text-sky-300">
            Baixo Peso (BP)
          </span>
          <div className="font-mono font-bold text-base text-slate-900 dark:text-white mt-0.5">
            ≤ {formatNumberBR(imcInfo.dados.bp, 1)}
          </div>
          <span className="text-[9px] text-slate-500">Risco RCF</span>
        </div>

        <div className="p-2.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 ring-2 ring-emerald-500/20 transition-colors">
          <span className="block text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
            Adequado (A)
          </span>
          <div className="font-mono font-bold text-base text-slate-900 dark:text-white mt-0.5">
            {imcInfo.dados.a}
          </div>
          <span className="text-[9px] text-emerald-600 font-semibold">Faixa Ideal</span>
        </div>

        <div className="p-2.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 transition-colors">
          <span className="block text-[10px] font-bold text-amber-700 dark:text-amber-300">
            Sobrepeso (S)
          </span>
          <div className="font-mono font-bold text-base text-slate-900 dark:text-white mt-0.5">
            {imcInfo.dados.s}
          </div>
          <span className="text-[9px] text-slate-500">Vigilância GDM</span>
        </div>

        <div className="p-2.5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 transition-colors">
          <span className="block text-[10px] font-bold text-rose-700 dark:text-rose-300">
            Obesidade (O)
          </span>
          <div className="font-mono font-bold text-base text-slate-900 dark:text-white mt-0.5">
            ≥ {formatNumberBR(imcInfo.dados.o, 1)}
          </div>
          <span className="text-[9px] text-slate-500">Alto Risco</span>
        </div>
      </div>
    </section>
  );
};
