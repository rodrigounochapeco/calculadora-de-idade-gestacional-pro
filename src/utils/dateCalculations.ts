import {
  ImcData,
  ImcResult,
  TimelineEvent,
  TrimesterInfo,
  ViabilityInfo
} from '../types/gestational';

export const TABELA_IMC: Record<number, ImcData> = {
  6: { bp: 19.9, a: '20,0–24,9', s: '25,0–30,0', o: 30.1 },
  8: { bp: 20.1, a: '20,2–25,0', s: '25,1–30,1', o: 30.2 },
  10: { bp: 20.2, a: '20,3–25,2', s: '25,3–30,2', o: 30.3 },
  11: { bp: 20.3, a: '20,4–25,3', s: '25,4–30,3', o: 30.4 },
  12: { bp: 20.4, a: '20,5–25,4', s: '25,5–30,3', o: 30.4 },
  13: { bp: 20.6, a: '20,7–25,6', s: '25,7–30,4', o: 30.5 },
  14: { bp: 20.7, a: '20,8–25,7', s: '25,8–30,5', o: 30.6 },
  15: { bp: 20.8, a: '20,9–25,8', s: '25,9–30,6', o: 30.7 },
  16: { bp: 21.0, a: '21,1–25,9', s: '26,0–30,7', o: 30.8 },
  17: { bp: 21.1, a: '21,2–26,0', s: '26,1–30,8', o: 30.9 },
  18: { bp: 21.2, a: '21,3–26,1', s: '26,2–30,9', o: 31.0 },
  19: { bp: 21.4, a: '21,5–26,2', s: '26,3–30,9', o: 31.0 },
  20: { bp: 21.5, a: '21,6–26,3', s: '26,4–31,0', o: 31.1 },
  21: { bp: 21.7, a: '21,8–26,4', s: '26,5–31,1', o: 31.2 },
  22: { bp: 21.8, a: '21,9–26,6', s: '26,7–31,2', o: 31.3 },
  23: { bp: 22.0, a: '22,1–26,8', s: '26,9–31,3', o: 31.4 },
  24: { bp: 22.2, a: '22,3–26,9', s: '27,0–31,5', o: 31.6 },
  25: { bp: 22.4, a: '22,5–27,0', s: '27,1–31,6', o: 31.7 },
  26: { bp: 22.6, a: '22,7–27,2', s: '27,3–31,7', o: 31.8 },
  27: { bp: 22.7, a: '22,8–27,3', s: '27,4–31,8', o: 31.9 },
  28: { bp: 22.9, a: '23,0–27,5', s: '27,6–31,9', o: 32.0 },
  29: { bp: 23.1, a: '23,2–27,6', s: '27,7–32,0', o: 32.1 },
  30: { bp: 23.3, a: '23,4–27,8', s: '27,9–32,1', o: 32.2 },
  31: { bp: 23.4, a: '23,5–27,9', s: '28,0–32,2', o: 32.3 },
  32: { bp: 23.6, a: '23,7–28,0', s: '28,1–32,3', o: 32.4 },
  33: { bp: 23.8, a: '23,9–28,1', s: '28,2–32,4', o: 32.5 },
  34: { bp: 23.9, a: '24,0–28,3', s: '28,4–32,5', o: 32.6 },
  35: { bp: 24.1, a: '24,2–28,4', s: '28,5–32,6', o: 32.7 },
  36: { bp: 24.2, a: '24,3–28,5', s: '28,6–32,7', o: 32.8 },
  37: { bp: 24.4, a: '24,5–28,7', s: '28,8–32,8', o: 32.9 },
  38: { bp: 24.5, a: '24,6–28,8', s: '28,9–32,9', o: 33.0 },
  39: { bp: 24.7, a: '24,8–28,9', s: '29,0–33,0', o: 33.1 },
  40: { bp: 24.9, a: '25,0–29,1', s: '29,2–33,1', o: 33.2 },
  41: { bp: 25.0, a: '25,1–29,2', s: '29,3–33,2', o: 33.3 },
  42: { bp: 25.0, a: '25,1–29,2', s: '29,3–33,2', o: 33.3 },
};

export const EVENTOS_CRONOGRAMA: TimelineEvent[] = [
  { sem: 0, nome: 'Data da Última Menstruação (DUM base)', tipo: 'base', icon: 'fa-regular fa-calendar-check' },
  { sem: 2, nome: 'Concepção provável estimada (ovulação no 14º dia)', tipo: 'base', icon: 'fa-solid fa-heart' },
  { sem: 12, nome: 'Translucência Nucal & Morfológico do 1º Trimestre (CCN)', tipo: 'exame', icon: 'fa-solid fa-dna' },
  { sem: 16, nome: 'Identificação ecográfica precisa do sexo fetal', tipo: 'exame', icon: 'fa-solid fa-venus-mars' },
  { sem: 20, nome: 'Percepção clássica de movimentos fetais maternos', tipo: 'clinico', icon: 'fa-solid fa-person-breastfeeding' },
  { sem: 22, nome: 'Ultrassom Morfológico de 2º Tri & Medida do Colo Uterino', tipo: 'exame', icon: 'fa-solid fa-camera' },
  { sem: 24, nome: 'Janela ideal para Ultrassonografia 3D/4D de alta definição', tipo: 'exame', icon: 'fa-solid fa-cube' },
  { sem: 28, nome: 'Ecocardiografia Fetal e Administração de Anti-Rh (se indicado)', tipo: 'exame', icon: 'fa-solid fa-heart-pulse' },
  { sem: 32, nome: 'Dopplerfluxometria & Perfil Biofísico Fetal (PBF)', tipo: 'exame', icon: 'fa-solid fa-chart-line' },
  { sem: 34, nome: 'Viabilidade pulmonar avançada em caso de prematuridade', tipo: 'clinico', icon: 'fa-solid fa-shield-heart' },
  { sem: 37, nome: 'Início da Gestação a Termo (37s0d a 41s6d)', tipo: 'marco', icon: 'fa-solid fa-check-double' },
  { sem: 39, nome: 'Janela de segurança para cesariana eletiva planejada', tipo: 'clinico', icon: 'fa-solid fa-clock' },
  { sem: 40, nome: 'Data Provável do Parto (DPP) — 280 dias de evolução', tipo: 'marco', icon: 'fa-solid fa-baby' },
  { sem: 41, nome: 'Vigilância fetal intensiva e consideração de indução', tipo: 'clinico', icon: 'fa-solid fa-notes-medical' },
  { sem: 42, nome: 'Limite de gestação cronologicamente prolongada (pós-termo)', tipo: 'alerta', icon: 'fa-solid fa-triangle-exclamation' },
];

export function getStartOfDay(d: Date | string | number): Date {
  const date = new Date(d);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function diffInDays(dateA: Date, dateB: Date): number {
  const a = getStartOfDay(dateA);
  const b = getStartOfDay(dateB);
  return Math.round((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
}

export function addDays(date: Date, days: number): Date {
  const res = getStartOfDay(date);
  res.setDate(res.getDate() + days);
  return res;
}

export function formatDateBR(date: Date | null): string {
  if (!date || isNaN(date.getTime())) return '—';
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

export function formatNumberBR(val: number, decimals = 1): string {
  return Number(val).toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function daysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate();
}

export function parseSmartDate(str: string, referenceDate: Date = getStartOfDay(new Date())): { valid: boolean; date?: Date; error?: string } {
  if (!str) return { valid: false, error: 'Preencha este campo' };
  const clean = str.trim();
  const parts = clean.split('/');
  if (parts.length < 2 || parts.length > 3) {
    return { valid: false, error: 'Use o formato DD/MM/AAAA ou DD/MM' };
  }

  const dia = parseInt(parts[0], 10);
  const mes = parseInt(parts[1], 10);
  if (isNaN(dia) || isNaN(mes) || mes < 1 || mes > 12) {
    return { valid: false, error: 'Mês ou dia inválido (1-12)' };
  }

  const hoje = getStartOfDay(referenceDate);
  let ano: number;

  if (parts.length === 2 || !parts[2] || parts[2].trim() === '') {
    const anoAtual = hoje.getFullYear();
    const maxDias = daysInMonth(mes, anoAtual);
    if (dia < 1 || dia > maxDias) return { valid: false, error: `Mês tem até ${maxDias} dias` };
    const cand = new Date(anoAtual, mes - 1, dia);
    ano = cand > hoje ? anoAtual - 1 : anoAtual;
  } else {
    ano = parseInt(parts[2], 10);
    if (isNaN(ano) || ano < 1900 || ano > hoje.getFullYear() + 2) {
      return { valid: false, error: `Ano deve estar entre 1900 e ${hoje.getFullYear() + 1}` };
    }
  }

  const maxDias = daysInMonth(mes, ano);
  if (dia < 1 || dia > maxDias) {
    return { valid: false, error: `Mês tem até ${maxDias} dias` };
  }

  const resDate = getStartOfDay(new Date(ano, mes - 1, dia));
  if (resDate > hoje) {
    return { valid: false, error: 'A data não pode ser futura' };
  }

  return { valid: true, date: resDate };
}

export function formatInputMask(value: string): string {
  let val = value.replace(/\D/g, '');
  if (val.length > 8) val = val.substring(0, 8);
  if (val.length >= 5) return `${val.substring(0, 2)}/${val.substring(2, 4)}/${val.substring(4)}`;
  if (val.length >= 3) return `${val.substring(0, 2)}/${val.substring(2)}`;
  return val;
}

export function calcularTrimestre(semanas: number): TrimesterInfo {
  if (semanas < 13) {
    return {
      id: 't1',
      nome: '1º Trimestre',
      sub: 'Organogênese e Implantação',
      badgeBg: 'bg-sky-50 dark:bg-sky-950/70 border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300',
      dotColor: 'bg-sky-500',
    };
  }
  if (semanas <= 26) {
    return {
      id: 't2',
      nome: '2º Trimestre',
      sub: 'Crescimento e Maturação Fetal',
      badgeBg: 'bg-teal-50 dark:bg-teal-950/70 border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300',
      dotColor: 'bg-teal-500',
    };
  }
  return {
    id: 't3',
    nome: '3º Trimestre',
    sub: 'Ganho Ponderal e Termo',
    badgeBg: 'bg-rose-50 dark:bg-rose-950/70 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300',
    dotColor: 'bg-rose-500',
  };
}

export function getStatusViabilidade(semanas: number): ViabilityInfo {
  if (semanas < 12) return { status: 'Desenvolvimento Embrionário', icon: 'fa-solid fa-seedling', cor: 'text-sky-600' };
  if (semanas < 24) return { status: 'Período Pré-Viável', icon: 'fa-solid fa-heart-pulse', cor: 'text-amber-600' };
  if (semanas < 37) return { status: 'Feto Viável • Crescimento Ativo', icon: 'fa-solid fa-child', cor: 'text-emerald-600' };
  if (semanas <= 41) return { status: 'Gestação a Termo', icon: 'fa-solid fa-award', cor: 'text-brand-600' };
  return { status: 'Pós-Termo • Alerta', icon: 'fa-solid fa-triangle-exclamation', cor: 'text-rose-600' };
}

export function getImcReferencia(semanas: number): ImcResult {
  if (semanas < 6) return { disponivel: false, msg: 'Tabela de IMC disponível a partir da 6ª semana.' };
  const sem = Math.min(Math.max(semanas, 6), 42);
  if (TABELA_IMC[sem]) return { disponivel: true, dados: TABELA_IMC[sem], semanaUsada: sem, nota: null };
  const keys = Object.keys(TABELA_IMC).map(Number).sort((a, b) => a - b);
  let maior = 6;
  for (const k of keys) {
    if (k <= sem) maior = k;
    else break;
  }
  return { disponivel: true, dados: TABELA_IMC[maior], semanaUsada: maior, nota: `Referência da semana ${maior}.` };
}

export function getAcogRedatingTolerance(semanas: number, dias: number): { toleranciaDias: number; metodo: string } {
  const totalDias = semanas * 7 + dias;
  if (totalDias <= (8 * 7 + 6)) return { toleranciaDias: 5, metodo: 'CCN' };
  if (totalDias <= (13 * 7 + 6)) return { toleranciaDias: 7, metodo: 'CCN' };
  if (totalDias <= (15 * 7 + 6)) return { toleranciaDias: 7, metodo: 'Biometria' };
  if (totalDias <= (21 * 7 + 6)) return { toleranciaDias: 10, metodo: 'Biometria' };
  if (totalDias <= (27 * 7 + 6)) return { toleranciaDias: 14, metodo: 'Biometria' };
  return { toleranciaDias: 21, metodo: 'Biometria' };
}
