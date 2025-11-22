// src/services/trackingServices.ts
import { Shipment } from '@/types';

// Simulação de Banco de Dados com cenários da DG-MEC
const MOCK_DB: Shipment[] = [
  {
    code: 'ESBR123456', // Código Espanha -> Brasil
    origin: 'Valencia, Espanha',
    destination: 'Santos, SP - Brasil',
    status: 'EM TRÂNSITO',
    estimatedDelivery: '15/12/2025',
    dgClass: 'Classe 3 - Líq. Inflamável',
    unNumber: 'UN 1263 (Tintas)',
    volume: '2 Containers 20ft (FCL)',
    modal: 'MARÍTIMO',
    history: [
      { date: '20/11/2025 14:30', location: 'Alto Mar', status: 'Em rota para Porto de Santos', description: 'Navio MSC Gustav' },
      { date: '18/11/2025 09:00', location: 'Porto de Valencia, ES', status: 'Embarque Confirmado', description: 'Carregamento em navio realizado' },
      { date: '16/11/2025 10:00', location: 'Valencia, ES', status: 'Desembaraço na Origem', description: 'Documentação DGD/MSDS validada' },
      { date: '15/11/2025 08:00', location: 'Madrid, ES', status: 'Coleta Realizada', description: 'Carga coletada no exportador' },
    ]
  },
  {
    code: 'AIR999888',
    origin: 'Frankfurt, Alemanha',
    destination: 'Viracopos, SP - Brasil',
    status: 'LIBERAÇÃO ADUANEIRA',
    estimatedDelivery: '25/11/2025',
    dgClass: 'Classe 6.1 - Tóxicos',
    unNumber: 'UN 2810',
    volume: '4 Caixas Homologadas (50kg)',
    modal: 'AÉREO',
    history: [
      { date: '22/11/2025 11:00', location: 'Viracopos, Campinas', status: 'Parametrização OEA', description: 'Carga em canal verde (OEA-S)' },
      { date: '22/11/2025 05:30', location: 'Viracopos, Campinas', status: 'Chegada ao Aeroporto', description: 'Voo LH506 pousado' },
      { date: '21/11/2025 22:00', location: 'Frankfurt, DE', status: 'Decolagem', description: 'Embarque prioritário DG' },
    ]
  }
];

export async function getShipmentByCode(code: string): Promise<Shipment | null> {
  // Simula delay de rede de 1 segundo para parecer real
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = MOCK_DB.find((item) => item.code === code);
      resolve(found || null);
    }, 1000);
  });
}