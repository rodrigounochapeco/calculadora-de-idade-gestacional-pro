import React, { useEffect } from 'react';

interface ProtocolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProtocolModal: React.FC<ProtocolModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-7 space-y-5 transition-all duration-200 scale-100 opacity-100">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/70 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 flex items-center justify-center text-lg">
              <i className="fa-solid fa-stethoscope"></i>
            </div>
            <div>
              <h2
                id="modalTitle"
                className="font-display font-bold text-lg text-slate-900 dark:text-white"
              >
                Fundamentação Clínica &amp; Diretrizes
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Consenso FEBRASGO e Colégio Americano (ACOG)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Content */}
        <div className="space-y-3.5 text-xs text-slate-600 dark:text-slate-300">
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
            <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100 mb-1 flex items-center gap-2">
              <i className="fa-regular fa-calendar-check text-brand-600 dark:text-brand-400"></i> 1. Regra de Naegele e DUM
            </h4>
            <p className="leading-relaxed">
              Adiciona 7 dias ao primeiro dia do último ciclo menstrual e subtrai 3 meses (ou soma 9 meses). A idade gestacional é rigorosamente contada dia a dia até a data atual.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
            <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100 mb-1 flex items-center gap-2">
              <i className="fa-solid fa-wave-square text-teal-600 dark:text-teal-400"></i> 2. Ultrassonografia e Redatação (ACOG 700)
            </h4>
            <p className="leading-relaxed">
              Quando a DUM diferir do ultrassom de primeiro trimestre por mais de 7 dias (diferença ≥ 8 dias), prevalece a idade gestacional do exame ultrassonográfico via medida do comprimento cabeça-nádega (CCN).
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
            <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100 mb-1 flex items-center gap-2">
              <i className="fa-solid fa-ruler-vertical text-amber-600 dark:text-amber-400"></i> 3. Regra de McDonald para AU
            </h4>
            <p className="leading-relaxed">
              Calcula-se por: <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono text-[11px] text-slate-900 dark:text-slate-100">(AU em cm × 8) / 7</code> para estimar as semanas. É um indicador assistencial de triagem e não substitui a ecografia para datação definitiva.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300">
            <div className="font-bold flex items-center gap-2 mb-0.5">
              <i className="fa-solid fa-shield-halved"></i> Conformidade LGPD &amp; HIPAA
            </div>
            <p className="leading-relaxed">
              Cálculo 100% Client-Side. Nenhum dado de paciente é transmitido a servidores ou armazenado externamente.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white rounded-xl text-xs font-bold transition-all duration-150 active:scale-95 shadow-sm cursor-pointer"
          >
            Fechar Guia
          </button>
        </div>
      </div>
    </div>
  );
};
