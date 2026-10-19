export type CalculationMethod = 'dum' | 'usg' | 'au';

export interface TrimesterInfo {
  id: 't1' | 't2' | 't3';
  nome: string;
  sub: string;
  badgeBg: string;
  dotColor: string;
}

export interface ViabilityInfo {
  status: string;
  icon: string;
  cor: string;
}

export interface ImcData {
  bp: number;
  a: string;
  s: string;
  o: number;
}

export interface ImcResult {
  disponivel: boolean;
  dados?: ImcData;
  semanaUsada?: number;
  nota?: string | null;
  msg?: string;
}

export interface TimelineEvent {
  sem: number;
  nome: string;
  tipo: 'base' | 'exame' | 'clinico' | 'marco' | 'alerta';
  icon: string;
}

export interface CalculatedEvent extends TimelineEvent {
  data: Date;
  diasPara: number;
  passado: boolean;
}

export interface CalculationResult {
  metodo: 'DUM' | 'USG' | 'AU';
  tituloMetodo: string;
  semanas: number;
  dias: number;
  semanasDecimal?: number;
  totalDias: number;
  dpp: Date | null;
  diasRestantesDPP: number | null;
  dumBase: Date | null;
  trimestre: TrimesterInfo;
  aproximado: boolean;
}
