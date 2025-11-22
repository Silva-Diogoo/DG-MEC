import { getShipmentByCode } from '@/services/trackingServices';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Para Next.js 15+
interface Props {
  params: Promise<{ code: string }>;
}

export default async function TrackingPage({ params }: Props) {
  const { code } = await params;
  const data = await getShipmentByCode(code);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {!data ? (
             <div className="text-center bg-white p-10 rounded shadow">
                <h1 className="text-2xl font-bold text-red-600 mb-2">Não encontrado</h1>
                <p>O código {code} não consta em nosso sistema. Tente BR123456.</p>
             </div>
          ) : (
             <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
                   <div>
                      <p className="text-xs text-gray-400 uppercase">Código de Rastreio</p>
                      <h1 className="text-3xl font-bold text-yellow-500">{data.code}</h1>
                   </div>
                   <div className="text-right">
                      <p className="text-xs text-gray-400 uppercase">Status Atual</p>
                      <span className="bg-yellow-500 text-slate-900 px-3 py-1 rounded font-bold text-sm">
                        {data.status}
                      </span>
                   </div>
                </div>

                <div className="p-8">
                   <div className="flex justify-between mb-8 border-b pb-4">
                      <div>
                         <p className="text-sm text-gray-500">Origem</p>
                         <p className="font-bold text-lg">{data.origin}</p>
                      </div>
                      <div className="text-right">
                         <p className="text-sm text-gray-500">Destino</p>
                         <p className="font-bold text-lg">{data.destination}</p>
                      </div>
                   </div>

                   <div className="space-y-8 relative border-l-2 border-gray-200 ml-3">
                      {data.history.map((event, index) => (
                         <div key={index} className="relative pl-8">
                            <span className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${index === 0 ? 'bg-yellow-500 border-yellow-600' : 'bg-gray-200'}`}></span>
                            <p className="text-sm text-gray-400 mb-1">{event.date}</p>
                            <h3 className="font-bold text-slate-800">{event.status}</h3>
                            <p className="text-gray-600 text-sm">{event.location}</p>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}