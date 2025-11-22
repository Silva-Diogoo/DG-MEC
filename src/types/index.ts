export interface HistoryEvent {
  date: string;
  location: string;
  status: string;
  icon?: string;
}

export interface Shipment {
  code: string;
  origin: string;
  destination: string;
  status: string;
  estimatedDelivery: string;
  history: HistoryEvent[];
}