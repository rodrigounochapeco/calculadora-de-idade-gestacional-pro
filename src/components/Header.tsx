import React from 'react';

interface HeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenProtocol: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  onToggleTheme,
  onOpenProtocol,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/95 dark:bg-[#0E1420]/95 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-brand-700 via-brand-600 to-teal-400 p-0.5 shadow-md flex items-center justify-center text-white flex-shrink-0 transition-transform hover:scale-105">
              <div className="w-full h-full bg-brand-700/30 rounded-[14px] flex items-center justify-center">
                <i className="fa-solid fa-baby text-lg sm:text-xl"></i>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-display font-extrabold text-base sm:text-xl tracking-tight bg-gradient-to-r from-slate-900 via-brand-800 to-teal-600 dark:from-white dark:via-brand-200 dark:to-teal-400 bg-clip-text text-transparent">
                  Calculadora de IG
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-950/60 dark:text-brand-300 dark:border-brand-800/60">
                  PRO • ACOG / FEBRASGO
                </span>
              </div>
            </div>
          </div>

          {/* Controls: Protocol & Theme Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenProtocol}
              className="h-9 sm:h-10 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-slate-200 dark:active:bg-slate-600 text-slate-800 dark:text-slate-100 hover:text-slate-900 dark:hover:text-white text-xs font-semibold inline-flex items-center gap-2 shadow-xs transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-brand-500/40 active:scale-[0.98] cursor-pointer"
            >
              <i className="fa-solid fa-book-medical text-brand-600 dark:text-brand-400"></i>
              <span className="hidden sm:inline">Protocolo Clínico</span>
            </button>

            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Alternar tema"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-slate-200 dark:active:bg-slate-600 text-slate-700 dark:text-slate-200 flex items-center justify-center shadow-xs transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-brand-500/40 active:scale-95 cursor-pointer"
            >
              {darkMode ? (
                <i className="fa-solid fa-sun text-sm text-amber-400 transition-transform rotate-0 hover:rotate-45"></i>
              ) : (
                <i className="fa-solid fa-moon text-sm text-slate-600 transition-transform rotate-0 hover:-rotate-12"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
