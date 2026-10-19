import React from 'react';
import {
  addDays,
  diffInDays,
  EVENTOS_CRONOGRAMA,
  formatDateBR,
  getStartOfDay,
} from '../utils/dateCalculations';

interface TimelineScheduleProps {
  dumBase: Date | null;
  dpp: Date | null;
  currentWeeks: number;
}

export const TimelineSchedule: React.FC<TimelineScheduleProps> = ({
  dumBase,
  dpp,
  currentWeeks,
}) => {
  if (!dumBase) return null;

  const hoje = getStartOfDay(new Date());

  const eventosOrdenados = EVENTOS_CRONOGRAMA.map((ev) => {
    const dataEv = addDays(dumBase, ev.sem * 7);
    const diasParaEv = diffInDays(dataEv, hoje);
    const passado = ev.sem < currentWeeks;
    return { ...ev, data: dataEv, diasPara: diasParaEv, passado };
  });

  return (
    <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-premium space-y-4 transition-colors">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center text-sm flex-shrink-0">
            <i className="fa-solid fa-timeline"></i>
          </div>
          <div>
            <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
              Cronograma de Marcos e Exames Pré-Natais
            </h3>
            <p className="text-[11px] text-slate-500">
              Base DUM: {formatDateBR(dumBase)} • DPP: {dpp ? formatDateBR(dpp) : '—'}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2.5">
        {eventosOrdenados.map((ev) => {
          const isCurrentWeek = ev.sem === currentWeeks;

          return (
            <div
              key={ev.sem + ev.nome}
              className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                ev.passado
                  ? 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/50 dark:border-slate-800 opacity-60'
                  : isCurrentWeek
                  ? 'bg-teal-50/80 dark:bg-teal-950/40 border-teal-300 dark:border-teal-700 ring-2 ring-teal-500/20'
                  : 'bg-white dark:bg-slate-850 border-slate-200/80 dark:border-slate-700/80'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs flex-shrink-0 ${
                    ev.passado
                      ? 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                      : 'bg-brand-50 dark:bg-brand-950 text-brand-600 border border-brand-200 dark:border-brand-800'
                  }`}
                >
                  <i className={ev.icon}></i>
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-100 truncate">
                    {ev.nome}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {formatDateBR(ev.data)} •{' '}
                    <span className="font-bold text-slate-600 dark:text-slate-300">
                      {ev.sem} semanas
                    </span>
                  </div>
                </div>
              </div>

              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-md flex-shrink-0 ${
                  ev.passado
                    ? 'bg-slate-200/60 dark:bg-slate-800 text-slate-500'
                    : ev.diasPara === 0
                    ? 'bg-emerald-500 text-white'
                    : 'bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300 border border-brand-200 dark:border-brand-800'
                }`}
              >
                {ev.passado
                  ? 'Concluído'
                  : ev.diasPara === 0
                  ? 'Hoje'
                  : `Em ${ev.diasPara} dias`}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
