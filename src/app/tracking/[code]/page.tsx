import Link from 'next/link';
import { getShipmentByCode } from '@/services/trackingServices';
import { ArrowLeft, Package, MapPin, Calendar, FileText, Anchor, Plane, Truck, AlertTriangle } from 'lucide-react';

interface Props {
  params: Promise<{ code: string }>;
}

export default async function TrackingPage({ params }: Props) {
  const { code } = await params;
  const data = await getShipmentByCode(code.toUpperCase());

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-8 rounded-sm shadow-lg text-center max-w-md border-t-4 border-red-500">
          <h1 className="text-2xl font-black text-slate-900 mb-2 uppercase">Rastreio Não Encontrado</h1>
          <p className="text-gray-600 mb-6">O código <strong>{code}</strong> não consta em nossa base ativa.</p>
          <div className="bg-yellow-50 p-4 rounded mb-6 text-sm text-left border border-yellow-100">
             <p className="font-bold text-yellow-700 mb-1">Códigos para teste:</p>
             <ul className="list-disc pl-4 text-slate-600">
                <li>ESBR123456 (Marítimo Espanha)</li>
                <li>AIR999888 (Aéreo Alemanha)</li>
             </ul>
          </div>
          <Link href="/" className="inline-block bg-slate-900 text-white font-bold py-3 px-6 rounded-sm hover:bg-slate-800 transition-colors uppercase text-xs tracking-widest">
            Voltar para Home
          </Link>
        </div>
      </div>
    );
  }

  // Ícone dinâmico baseado no modal
  const ModalIcon = data.modal === 'AÉREO' ? Plane : data.modal === 'MARÍTIMO' ? Anchor : Truck;

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Botão Voltar */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-sm mb-6 uppercase tracking-wide transition-colors">
           <ArrowLeft size={16} /> Nova Consulta
        </Link>

        {/* CARD PRINCIPAL DE STATUS */}
        <div className="bg-white rounded-sm shadow-xl border-t-4 border-yellow-500 overflow-hidden mb-8">
           
           {/* Cabeçalho do Card */}
           <div className="bg-slate-900 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                 <div className="flex items-center gap-3 mb-1">
                    <span className="bg-yellow-500 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-widest">
                        {data.modal}
                    </span>
                    <span className="text-gray-400 text-xs font-mono">REF: {data.code}</span>
                 </div>
                 <h1 className="text-3xl font-black text-white tracking-tight">{data.code}</h1>
              </div>
              
              <div className="text-right">
                 <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Status Atual</p>
                 <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-sm border border-white/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-bold text-sm uppercase">{data.status}</span>
                 </div>
              </div>
           </div>

           {/* Informações Técnicas (Grid Industrial) */}
           <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 border-b border-gray-100">
              <InfoBlock label="Origem" value={data.origin} icon={<MapPin size={16}/>} />
              <InfoBlock label="Destino" value={data.destination} icon={<MapPin size={16}/>} />
              <InfoBlock label="Previsão" value={data.estimatedDelivery} icon={<Calendar size={16}/>} />
              <InfoBlock label="Volume" value={data.volume} icon={<Package size={16}/>} />
           </div>

           {/* DADOS DE CARGA PERIGOSA (Destaque) */}
           <div className="bg-yellow-50 p-6 flex flex-col md:flex-row gap-6 items-center border-b border-gray-100">
              <div className="flex items-center gap-3">
                 <div className="bg-yellow-500 text-slate-900 p-2 rounded-sm">
                    <AlertTriangle size={24} />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-800">Dados DG</p>
                    <p className="text-lg font-black text-slate-900 uppercase">{data.unNumber}</p>
                 </div>
              </div>
              <div className="h-8 w-px bg-yellow-200 hidden md:block"></div>
              <div className="flex-1">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-800">Classificação de Risco</p>
                 <p className="text-sm font-bold text-slate-800">{data.dgClass}</p>
              </div>
           </div>

           {/* Timeline Vertical */}
           <div className="p-8">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-8 flex items-center gap-2">
                 <FileText size={16} className="text-slate-400" /> Histórico de Eventos
              </h3>
              
              <div className="space-y-8 relative border-l-2 border-slate-200 ml-3">
                 {data.history.map((event, index) => (
                    <div key={index} className="relative pl-8">
                       {/* Bolinha da Timeline */}
                       <span className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${index === 0 ? 'bg-yellow-500 border-yellow-600' : 'bg-slate-200 border-white'}`}></span>
                       
                       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start group">
                          <div>
                             <p className="text-xs font-bold text-slate-400 mb-1">{event.date}</p>
                             <h4 className={`text-lg font-bold mb-1 ${index === 0 ? 'text-slate-900' : 'text-slate-500'}`}>
                                {event.status}
                             </h4>
                             <p className="text-sm text-gray-500 font-medium">{event.description}</p>
                             <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                <MapPin size={10} /> {event.location}
                             </p>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </main>
  );
}

// Micro-componente para os blocos de informação
function InfoBlock({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
   return (
      <div className="p-6 hover:bg-gray-50 transition-colors">
         <div className="flex items-center gap-2 text-gray-400 mb-2 text-xs uppercase font-bold tracking-wider">
            {icon} {label}
         </div>
         <div className="text-sm font-bold text-slate-900 leading-tight">
            {value}
         </div>
      </div>
   )
}