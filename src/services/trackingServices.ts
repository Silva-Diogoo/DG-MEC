import { Shipment } from '@/types';

// Simulação de Banco de Dados (Focado Exclusivamente em Espanha -> Brasil)
const MOCK_DB: Shipment[] = [
  // 1. MARÍTIMO: Valencia -> Santos (Em Trânsito)
  {
    code: 'ESBR1001',
    origin: 'Valencia, Espanha',
    destination: 'Santos, SP - Brasil',
    status: 'EM TRÂNSITO',
    estimatedDelivery: '15/12/2025',
    dgClass: 'Classe 3 - Líq. Inflamável',
    unNumber: 'UN 1263 (Tintas Industriais)',
    volume: '2 Containers 20ft (FCL)',
    modal: 'MARÍTIMO',
    history: [
      { date: '20/11/2025 14:30', location: 'Oceano Atlântico', status: 'Em rota para Brasil', description: 'Navio MSC Gustav - Previsão mantida' },
      { date: '18/11/2025 09:00', location: 'Porto de Valencia, ES', status: 'Embarque Confirmado', description: 'Carregamento segregado conforme IMDG' },
      { date: '16/11/2025 10:00', location: 'Valencia, ES', status: 'Desembaraço na Origem', description: 'DGD validado sem pendências' },
    ]
  },

  // 2. AÉREO: Madrid -> Guarulhos (Urgente/Pharma)
  {
    code: 'ESBR2002',
    origin: 'Madrid (Barajas), Espanha',
    destination: 'Guarulhos, SP - Brasil',
    status: 'LIBERAÇÃO ADUANEIRA',
    estimatedDelivery: '23/11/2025',
    dgClass: 'Classe 6.1 - Tóxicos',
    unNumber: 'UN 2810 (Compostos Orgânicos)',
    volume: '4 Caixas UN 4G (50kg)',
    modal: 'AÉREO',
    history: [
      { date: '22/11/2025 08:15', location: 'Aeroporto GRU, SP', status: 'Recepção de Carga', description: 'Entrada no TC-6 (Armazém DG)' },
      { date: '22/11/2025 05:30', location: 'Aeroporto GRU, SP', status: 'Chegada ao Brasil', description: 'Voo IB6827 pousado' },
      { date: '21/11/2025 23:45', location: 'Madrid, ES', status: 'Decolagem', description: 'Embarque prioritário (CAO - Cargo Aircraft Only)' },
    ]
  },

  // 3. MARÍTIMO: Barcelona -> Paranaguá (Entregue)
  {
    code: 'ESBR3003',
    origin: 'Barcelona, Espanha',
    destination: 'Paranaguá, PR - Brasil',
    status: 'ENTREGUE',
    estimatedDelivery: '10/11/2025',
    dgClass: 'Classe 8 - Corrosivos',
    unNumber: 'UN 1760 (Líquido Corrosivo)',
    volume: '1 Container Tanque (ISO Tank)',
    modal: 'RODOVIÁRIO', // Fase final da entrega
    history: [
      { date: '12/11/2025 10:00', location: 'Curitiba, PR', status: 'Entrega Realizada', description: 'Recebido por: João Silva (Engenharia)' },
      { date: '11/11/2025 14:00', location: 'Estrada BR-277', status: 'Em Trânsito Rodoviário', description: 'Transporte dedicado com licença MOPP' },
      { date: '10/11/2025 08:00', location: 'Porto de Paranaguá', status: 'Desembaraço Concluído', description: 'Canal Verde - OEA' },
    ]
  },

  // 4. MARÍTIMO: Bilbao -> Suape (Pendente/Coleta)
  {
    code: 'ESBR4004',
    origin: 'Bilbao, Espanha',
    destination: 'Suape, PE - Brasil',
    status: 'PENDENTE',
    estimatedDelivery: 'Aguardando Booking',
    dgClass: 'Classe 4.1 - Sólidos Inflamáveis',
    unNumber: 'UN 1325',
    volume: '10 Pallets (LCL)',
    modal: 'MARÍTIMO',
    history: [
      { date: '22/11/2025 09:00', location: 'Bilbao, ES', status: 'Aguardando Coleta', description: 'Veículo agendado para retirada na fábrica' },
      { date: '21/11/2025 16:00', location: 'Sistema DG-MEC', status: 'Solicitação Recebida', description: 'Análise de MSDS em andamento' },
    ]
  }
];

export async function getShipmentByCode(code: string): Promise<Shipment | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = MOCK_DB.find((item) => item.code === code);
      resolve(found || null);
    }, 1000);
  });
}