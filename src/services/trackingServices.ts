import { Shipment } from '@/types';

const MOCK_DB: Shipment[] = [
  {
    code: 'BR123456',
    origin: 'São Paulo, SP',
    destination: 'Lisboa, PT',
    status: 'EM TRÂNSITO',
    estimatedDelivery: '25/11/2025',
    history: [
      { date: '22/11/2025 14:00', location: 'São Paulo', status: 'Saiu para entrega ao aeroporto' },
      { date: '21/11/2025 09:00', location: 'São Paulo', status: 'Recebido no centro de distribuição' },
      { date: '20/11/2025 18:30', location: 'Campinas', status: 'Coletado' },
    ]
  },
  {
    code: 'US999888',
    origin: 'Miami, USA',
    destination: 'Rio de Janeiro, BR',
    status: 'ENTREGUE',
    estimatedDelivery: '20/11/2025',
    history: [
      { date: '20/11/2025 10:00', location: 'Rio de Janeiro', status: 'Entregue ao destinatário' },
    ]
  }
];

export async function getShipmentByCode(code: string): Promise<Shipment | null> {
  // Simula delay de rede de 1 segundo
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = MOCK_DB.find((item) => item.code === code);
      resolve(found || null);
    }, 800);
  });
}