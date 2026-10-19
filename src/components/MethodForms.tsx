import React from 'react';
import { CalculationMethod } from '../types/gestational';

interface MethodFormsProps {
  activeMethod: CalculationMethod;
  // DUM state
  dumInput: string;
  dumError: string | null;
  onDumChange: (val: string) => void;
  onDumHoje: () => void;
  onDumQuickWeeks: (weeks: number) => void;

  // USG state
  usgDateInput: string;
  usgDateError: string | null;
  usgWeeksInput: string;
  usgWeeksError: string | null;
  usgDaysInput: string;
  usgDaysError: string | null;
  onUsgDateChange: (val: string) => void;
  onUsgWeeksChange: (val: string) => void;
  onUsgDaysChange: (val: string) => void;

  // AU state
  auInput: string;
  auError: string | null;
  onAuChange: (val: string) => void;
}

export const MethodForms: React.FC<MethodFormsProps> = ({
  activeMethod,
  dumInput,
  dumError,
  onDumChange,
  onDumHoje,
  onDumQuickWeeks,
  usgDateInput,
  usgDateError,
  usgWeeksInput,
  usgWeeksError,
  usgDaysInput,
  usgDaysError,
  onUsgDateChange,
  onUsgWeeksChange,
  onUsgDaysChange,
  auInput,
  auError,
  onAuChange,
}) => {
  return (
    <div>
      {/* PAINEL DUM */}
      {activeMethod === 'dum' && (
        <section
          id="panel-dum"
          role="tabpanel"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
        >
          <div className="md:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-premium transition-colors">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></span>
                <h2 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  Datação por DUM
                </h2>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                Naegele (+7d / -3m)
              </span>
            </div>

            <form onSubmit={(e) => e.preventDefault()} noValidate className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="inputDUM"
                    className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase"
                  >
                    Data da Última Menstruação
                  </label>
                  <button
                    type="button"
                    onClick={onDumHoje}
                    className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-all duration-150 active:scale-95 cursor-pointer"
                  >
                    Hoje
                  </button>
                </div>
                <div className="relative">
                  <i className="fa-regular fa-calendar absolute left-3.5 top-3.5 text-slate-400"></i>
                  <input
                    type="text"
                    id="inputDUM"
                    inputMode="numeric"
                    placeholder="DD/MM/AAAA"
                    value={dumInput}
                    onChange={(e) => onDumChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-mono text-sm font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all duration-150"
                  />
                </div>
                {dumError && (
                  <div
                    className="flex items-center gap-1.5 mt-1.5 text-xs font-semibold text-rose-500"
                    role="alert"
                  >
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <span>{dumError}</span>
                  </div>
                )}
              </div>

              <div>
                <span className="block text-[11px] font-semibold text-slate-400 mb-1">
                  Atalhos rápidos:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[8, 16, 24, 32].map((weeks) => (
                    <button
                      key={weeks}
                      type="button"
                      onClick={() => onDumQuickWeeks(weeks)}
                      className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-brand-950/60 hover:text-brand-700 dark:hover:text-brand-300 text-slate-700 dark:text-slate-300 rounded-lg transition-all duration-150 hover:scale-105 active:scale-95 cursor-pointer border border-transparent hover:border-brand-200 dark:hover:border-brand-800"
                    >
                      Há {weeks} sem
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>

          <div className="md:col-span-5 bg-slate-100/70 dark:bg-slate-900/60 rounded-3xl p-4.5 border border-slate-200/80 dark:border-slate-800 text-xs space-y-2">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <i className="fa-solid fa-stethoscope text-brand-600"></i> Sobre a DUM
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Método de referência mundial quando a data é recordada com segurança e os ciclos são regulares (28-30 dias).
            </p>
            <p className="text-amber-700 dark:text-amber-400 font-medium leading-relaxed">
              Se houver diferença &gt; 7 dias com o USG do 1º trimestre, o USG prevalece obrigatoriamente.
            </p>
          </div>
        </section>
      )}

      {/* PAINEL USG */}
      {activeMethod === 'usg' && (
        <section
          id="panel-usg"
          role="tabpanel"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
        >
          <div className="md:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-premium transition-colors">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 ring-4 ring-teal-500/20"></span>
                <h2 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  Datação por Ultrassonografia
                </h2>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                Projeção Linear
              </span>
            </div>

            <form onSubmit={(e) => e.preventDefault()} noValidate className="space-y-3">
              <div>
                <label
                  htmlFor="inputDataUSG"
                  className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1"
                >
                  Data do Exame Ultrassonográfico
                </label>
                <div className="relative">
                  <i className="fa-regular fa-calendar absolute left-3.5 top-3.5 text-slate-400"></i>
                  <input
                    type="text"
                    id="inputDataUSG"
                    inputMode="numeric"
                    placeholder="DD/MM/AAAA"
                    value={usgDateInput}
                    onChange={(e) => onUsgDateChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-mono text-sm font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none transition"
                  />
                </div>
                {usgDateError && (
                  <div
                    className="flex items-center gap-1.5 mt-1.5 text-xs font-semibold text-rose-500"
                    role="alert"
                  >
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <span>{usgDateError}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="inputUSGSemanas"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1"
                  >
                    Semanas (no exame)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="inputUSGSemanas"
                      min="0"
                      max="42"
                      placeholder="0 - 42"
                      value={usgWeeksInput}
                      onChange={(e) => onUsgWeeksChange(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-900 dark:text-white tabular-nums focus:ring-2 focus:ring-brand-500 focus:outline-none transition"
                    />
                    <span className="absolute right-3 top-2.5 text-xs text-slate-400 pointer-events-none">
                      sem
                    </span>
                  </div>
                  {usgWeeksError && (
                    <div className="text-xs text-rose-500 font-semibold mt-1">
                      {usgWeeksError}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="inputUSGDias"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1"
                  >
                    Dias adicionais
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="inputUSGDias"
                      min="0"
                      max="6"
                      placeholder="0 - 6"
                      value={usgDaysInput}
                      onChange={(e) => onUsgDaysChange(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-900 dark:text-white tabular-nums focus:ring-2 focus:ring-brand-500 focus:outline-none transition"
                    />
                    <span className="absolute right-3 top-2.5 text-xs text-slate-400 pointer-events-none">
                      dias
                    </span>
                  </div>
                  {usgDaysError && (
                    <div className="text-xs text-rose-500 font-semibold mt-1">
                      {usgDaysError}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          <div className="md:col-span-5 bg-slate-100/70 dark:bg-slate-900/60 rounded-3xl p-4.5 border border-slate-200/80 dark:border-slate-800 text-xs space-y-2">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <i className="fa-solid fa-hospital-user text-teal-600"></i> Diretrizes do USG
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Precisão no 1º Tri:</strong> Acurácia de ±3 a 5 dias via CCN (&lt;14 sem). Parâmetro ouro para a datação.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Margem por Tri:</strong> 1º Tri: ±5d; 2º Tri: ±7–10d; 3º Tri: ±14–21d. Preferir sempre o exame mais precoce.
            </p>
          </div>
        </section>
      )}

      {/* PAINEL AU */}
      {activeMethod === 'au' && (
        <section
          id="panel-au"
          role="tabpanel"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
        >
          <div className="md:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-premium transition-colors">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-4 ring-amber-500/20"></span>
                <h2 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  Estimativa por Altura Uterina
                </h2>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                McDonald: (AU × 8) / 7
              </span>
            </div>

            <form onSubmit={(e) => e.preventDefault()} noValidate className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="inputAU"
                    className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase"
                  >
                    Medida da Sínfise ao Fundo (cm)
                  </label>
                  <span className="text-xs font-mono font-bold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950 px-2 py-0.5 rounded border border-brand-200 dark:border-brand-800">
                    {auInput ? `${auInput} cm` : '24.0 cm'}
                  </span>
                </div>
                <div className="relative mb-2">
                  <i className="fa-solid fa-tape absolute left-3.5 top-3.5 text-slate-400"></i>
                  <input
                    type="number"
                    id="inputAU"
                    step="0.5"
                    min="5"
                    max="50"
                    placeholder="Ex: 24"
                    value={auInput}
                    onChange={(e) => onAuChange(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-900 dark:text-white tabular-nums focus:ring-2 focus:ring-brand-500 focus:outline-none transition"
                  />
                  <span className="absolute right-3.5 top-2.5 text-xs text-slate-400 pointer-events-none">
                    cm
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="45"
                  step="0.5"
                  value={parseFloat(auInput) || 24}
                  onChange={(e) => onAuChange(e.target.value)}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer accent-brand-600"
                />
                {auError && (
                  <div className="text-xs text-rose-500 font-semibold mt-1">
                    {auError}
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="md:col-span-5 bg-slate-100/70 dark:bg-slate-900/60 rounded-3xl p-4.5 border border-slate-200/80 dark:border-slate-800 text-xs space-y-2">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <i className="fa-solid fa-ruler-combined text-amber-600"></i> Correlação Anatômica
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>12 sem:</strong> Sínfise púbica | <strong>20 sem:</strong> Cicatriz umbilical (~20 cm) | <strong>&gt;20 sem:</strong> AU em cm coincide aproximadamente com a IG em semanas.
            </p>
          </div>
        </section>
      )}
    </div>
  );
};
