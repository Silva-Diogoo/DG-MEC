// src/types/index.ts

export interface HistoryEvent {
  date: string;
  location: string;
  status: string;
  description?: string;
}

export interface Shipment {
  code: string;
  origin: string;
  destination: string;
  status: 'PENDENTE' | 'EM TRÂNSITO' | 'LIBERAÇÃO ADUANEIRA' | 'ENTREGUE';
  estimatedDelivery: string;
  
  // Dados Técnicos DG-MEC
  dgClass: string;       // Ex: Classe 3 - Líquido Inflamável
  unNumber: string;      // Ex: UN 1263
  volume: string;        // Ex: 4 Tambores (800kg)
  modal: 'MARÍTIMO' | 'AÉREO' | 'RODOVIÁRIO';
  
  history: HistoryEvent[];
}