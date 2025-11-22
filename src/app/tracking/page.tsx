import TrackingForm from '@/components/TrackingForm';

export default function TrackingPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Rastreamento de Encomendas</h1>
        <p className="text-gray-600 text-center mb-8">
          Digite o código de rastreamento para acompanhar sua encomenda em tempo real
        </p>
        
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <TrackingForm />
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-semibold text-lg mb-4">Códigos de teste:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="bg-yellow-100 px-3 py-1 rounded font-mono mr-3">BR123456</span>
                <span>Encomenda em trânsito</span>
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 px-3 py-1 rounded font-mono mr-3">BR789012</span>
                <span>Encomenda entregue</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}