import React from 'react';
import { CalculationMethod } from '../types/gestational';

interface MethodTabsProps {
  activeMethod: CalculationMethod;
  onChangeMethod: (method: CalculationMethod) => void;
}

export const MethodTabs: React.FC<MethodTabsProps> = ({
  activeMethod,
  onChangeMethod,
}) => {
  return (
    <div
      className="bg-slate-100/90 dark:bg-slate-900/90 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-2 shadow-inner"
      role="tablist"
      aria-label="Métodos de datação gestacional"
    >
      {/* DUM Tab */}
      <button
        type="button"
        role="tab"
        aria-selected={activeMethod === 'dum'}
        onClick={() => onChangeMethod('dum')}
        className={`flex items-center gap-2.5 p-3 rounded-xl transition-all duration-200 font-sans text-left group cursor-pointer active:scale-[0.98] ${
          activeMethod === 'dum'
            ? 'bg-white dark:bg-slate-800 text-brand-700 dark:text-brand-300 shadow-md ring-2 ring-teal-500/20'
            : 'hover:bg-white/60 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400'
        }`}
      >
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 group-hover:scale-110 transition-transform ${
            activeMethod === 'dum'
              ? 'bg-brand-50 dark:bg-brand-950/70 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400'
              : 'bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
          }`}
        >
          <i className="fa-regular fa-calendar-check"></i>
        </div>
        <div className="min-w-0">
          <div className="font-display font-bold text-xs sm:text-sm leading-tight flex items-center gap-1">
            <span>DUM</span>
            <span
              className={`text-[9px] uppercase font-semibold px-1 rounded transition-colors ${
                activeMethod === 'dum'
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/70'
                  : 'text-slate-500 bg-slate-200/60 dark:bg-slate-800'
              }`}
            >
              {activeMethod === 'dum' ? 'Ativo' : 'Padrão'}
            </span>
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
            Última Menstruação
          </div>
        </div>
      </button>

      {/* USG Tab */}
      <button
        type="button"
        role="tab"
        aria-selected={activeMethod === 'usg'}
        onClick={() => onChangeMethod('usg')}
        className={`flex items-center gap-2.5 p-3 rounded-xl transition-all duration-200 font-sans text-left group cursor-pointer active:scale-[0.98] ${
          activeMethod === 'usg'
            ? 'bg-white dark:bg-slate-800 text-brand-700 dark:text-brand-300 shadow-md ring-2 ring-teal-500/20'
            : 'hover:bg-white/60 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400'
        }`}
      >
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 group-hover:scale-110 transition-transform ${
            activeMethod === 'usg'
              ? 'bg-brand-50 dark:bg-brand-950/70 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400'
              : 'bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
          }`}
        >
          <i className="fa-solid fa-wave-square"></i>
        </div>
        <div className="min-w-0">
          <div className="font-display font-bold text-xs sm:text-sm leading-tight flex items-center gap-1">
            <span>USG</span>
            <span
              className={`text-[9px] uppercase font-bold px-1 rounded transition-colors ${
                activeMethod === 'usg'
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/70'
                  : 'text-slate-500 bg-slate-200/60 dark:bg-slate-800'
              }`}
            >
              {activeMethod === 'usg' ? 'Ativo' : 'Ultrassom'}
            </span>
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
            Ultrassonografia
          </div>
        </div>
      </button>

      {/* AU Tab */}
      <button
        type="button"
        role="tab"
        aria-selected={activeMethod === 'au'}
        onClick={() => onChangeMethod('au')}
        className={`flex items-center gap-2.5 p-3 rounded-xl transition-all duration-200 font-sans text-left group cursor-pointer active:scale-[0.98] ${
          activeMethod === 'au'
            ? 'bg-white dark:bg-slate-800 text-brand-700 dark:text-brand-300 shadow-md ring-2 ring-teal-500/20'
            : 'hover:bg-white/60 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400'
        }`}
      >
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 group-hover:scale-110 transition-transform ${
            activeMethod === 'au'
              ? 'bg-brand-50 dark:bg-brand-950/70 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400'
              : 'bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
          }`}
        >
          <i className="fa-solid fa-ruler-vertical"></i>
        </div>
        <div className="min-w-0">
          <div className="font-display font-bold text-xs sm:text-sm leading-tight flex items-center gap-1">
            <span>AU</span>
            <span
              className={`text-[9px] uppercase font-medium px-1 rounded transition-colors ${
                activeMethod === 'au'
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/70'
                  : 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60'
              }`}
            >
              Triagem
            </span>
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
            Altura Uterina
          </div>
        </div>
      </button>
    </div>
  );
};
