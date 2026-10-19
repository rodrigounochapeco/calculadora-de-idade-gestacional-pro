import React from 'react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  const isVisible = Boolean(message);

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 ease-out pointer-events-none flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900/95 dark:bg-slate-800/95 backdrop-blur-md text-white text-xs font-semibold shadow-2xl border border-slate-700/80 ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-4 opacity-0 scale-95'
      }`}
    >
      <i className="fa-solid fa-circle-check text-emerald-400 text-sm"></i>
      <span>{message || ''}</span>
    </div>
  );
};
