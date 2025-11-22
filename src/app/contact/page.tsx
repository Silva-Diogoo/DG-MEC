import PageHeader from '@/components/PageHeader';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="flex-col min-h-screen bg-slate-50">
      <PageHeader 
        title="Fale Conosco" 
        subtitle="Estamos prontos para atender sua demanda. Entre em contato agora."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Coluna da Esquerda: Informações (Azul Escuro) */}
            <div className="bg-slate-900 text-white p-10 rounded-lg shadow-xl h-fit">
              <h2 className="text-2xl font-bold mb-8 text-yellow-500">Canais de Atendimento</h2>
              
              <div className="space-y-8">
                <ContactItem icon={<Phone />} title="Telefone" text="+55 (11) 1234-5678" />
                <ContactItem icon={<Mail />} title="Email" text="comercial@logisticspro.com" />
                <ContactItem icon={<MapPin />} title="Sede" text="Av. Paulista, 1000 - SP, Brasil" />
                <ContactItem icon={<Clock />} title="Horário" text="Seg - Sex: 08h às 18h" />
              </div>
            </div>

            {/* Coluna da Direita: Formulário (Branco) */}
            <div className="md:col-span-2 bg-white p-10 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Envie uma mensagem</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Nome Completo</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all" placeholder="Seu nome" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Corporativo</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all" placeholder="seu@email.com" />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-gray-700">Assunto</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all" placeholder="Ex: Cotação de frete internacional" />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-gray-700">Mensagem</label>
                  <textarea rows={5} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all" placeholder="Detalhe sua necessidade..."></textarea>
                </div>

                <div className="md:col-span-2">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-4 px-8 rounded w-full transition-colors uppercase tracking-wider shadow-md">
                    Enviar Solicitação
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

function ContactItem({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-yellow-500 mt-1 shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold text-gray-200 text-sm uppercase tracking-wide">{title}</h3>
        <p className="text-white font-medium mt-1">{text}</p>
      </div>
    </div>
  )
}