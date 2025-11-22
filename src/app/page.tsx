import Link from 'next/link';
import { Globe, Truck, ShieldCheck, Anchor, FileCheck, Award, ArrowRight, Warehouse, Box } from 'lucide-react';
import TrackingForm from '@/components/TrackingForm';

export default function Home() {
  return (
    <main className="flex-col min-h-screen bg-gray-50">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070')" }}
        ></div>
        <div className="absolute inset-0 z-10 bg-slate-900/80"></div>

        <div className="relative z-20 w-full max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center mt-8">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500 text-slate-900 text-xs font-bold uppercase mb-8 tracking-widest">
               <Globe size={14} />
               Rota Espanha → Brasil
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              SEGURANÇA QUE <br/>
              <span className="text-yellow-500">MOVIMENTA O MUNDO.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-10 max-w-xl font-light leading-relaxed border-l-4 border-yellow-500 pl-6">
              Operador Logístico Internacional especializado em cargas perigosas (DG). 
              Conformidade IATA, OEA e rigor técnico absoluto.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-yellow-500 text-slate-900 font-bold py-4 px-10 hover:bg-white transition-colors uppercase text-sm tracking-wider">
                  Solicitar Cotação
              </Link>
              <Link href="/services" className="group flex items-center gap-3 text-white font-semibold py-4 px-8 border border-white/30 hover:bg-white/10 transition-all uppercase text-sm tracking-wider">
                  Nossos Serviços <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-yellow-500" />
              </Link>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="bg-slate-900 border-t-4 border-yellow-500 p-8 shadow-2xl">
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3 uppercase tracking-wide">
                <Truck className="text-yellow-500" size={24} />
                Rastreamento DG
              </h3>
              <TrackingForm />
              <div className="mt-8 pt-6 border-t border-slate-700 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <ShieldCheck className="text-green-500 w-8 h-8" />
                    <div>
                        <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Certificação</p>
                        <p className="text-white font-bold text-sm">100% OEA & ANTT</p>
                    </div>
                 </div>
                 <div className="text-right">
                    <p className="text-yellow-500 text-xs font-bold">MONITORAMENTO 24/7</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST BAR --- */}
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8">
            <div className="flex items-center gap-3 text-slate-800 font-bold text-lg opacity-70 hover:opacity-100 transition-all"><Award className="text-slate-900"/> IATA <span className="text-gray-400 text-xs uppercase">Dangerous Goods</span></div>
            <div className="flex items-center gap-3 text-slate-800 font-bold text-lg opacity-70 hover:opacity-100 transition-all"><Anchor className="text-slate-900"/> IMDG <span className="text-gray-400 text-xs uppercase">Code</span></div>
            <div className="flex items-center gap-3 text-slate-800 font-bold text-lg opacity-70 hover:opacity-100 transition-all"><ShieldCheck className="text-slate-900"/> OEA <span className="text-gray-400 text-xs uppercase">Certificado</span></div>
            <div className="flex items-center gap-3 text-slate-800 font-bold text-lg opacity-70 hover:opacity-100 transition-all"><Truck className="text-slate-900"/> ANTT <span className="text-gray-400 text-xs uppercase">Homologado</span></div>
        </div>
      </div>

      {/* --- GRID DE SERVIÇOS (COM IMAGENS RESTAURADAS) --- */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
           <div className="mb-16 border-l-8 border-yellow-500 pl-8">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-2 uppercase tracking-tight">Logística de Alta Complexidade</h2>
              <p className="text-gray-600 max-w-2xl text-lg">
                Gerenciamento de risco e integridade para cargas químicas, farmacêuticas e industriais.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
              
              {/* CARD 1: ESPANHA -> BRASIL (Efeito Zoom na Imagem) */}
              <div className="md:col-span-2 bg-slate-900 relative group cursor-pointer border-b-4 border-yellow-500 overflow-hidden">
                 {/* IMAGEM DE FUNDO RESTAURADA */}
                 <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 ease-in-out"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=2070')" }}
                 ></div>
                 
                 <div className="relative z-10 h-full flex flex-col justify-between p-10">
                    <div className="flex justify-between items-start">
                        <div className="bg-transparent border border-yellow-500/50 p-3 text-yellow-500 backdrop-blur-sm">
                            <Globe size={32} strokeWidth={1.5} />
                        </div>
                        <div className="text-white text-xs font-bold border border-white/30 px-3 py-1 uppercase tracking-widest backdrop-blur-sm">
                            Fluxo Prioritário
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-2 uppercase">Importação Espanha → Brasil</h3>
                        <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                           Coordenação internacional direta. Booking em armadores e liberação final com expertise local.
                        </p>
                    </div>
                 </div>
              </div>

              {/* CARD 2: COMPLIANCE */}
              <div className="bg-white border border-gray-200 p-8 hover:border-slate-900 transition-colors group hover:shadow-lg">
                 <div className="mb-6 text-slate-400 group-hover:text-yellow-600 transition-colors">
                    <FileCheck size={40} strokeWidth={1.5} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase">Compliance & OEA</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                    Operações auditáveis e alinhadas às exigências da Receita Federal. Segurança documental absoluta.
                 </p>
              </div>

              {/* CARD 3: FROTA */}
              <div className="bg-white border border-gray-200 p-8 hover:border-slate-900 transition-colors group hover:shadow-lg">
                 <div className="mb-6 text-slate-400 group-hover:text-yellow-600 transition-colors">
                    <Truck size={40} strokeWidth={1.5} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase">Frota Homologada</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                    Veículos certificados ANTT e motoristas com treinamento MOPP para químicos perigosos.
                 </p>
              </div>

              {/* CARD 4: ARMAZENAGEM (Efeito Fade In na Imagem) */}
              <div className="md:col-span-2 bg-slate-100 relative group cursor-pointer flex items-center border-l-4 border-slate-300 hover:border-yellow-500 transition-colors overflow-hidden">
                 {/* IMAGEM DE FUNDO (Aparece no Hover) */}
                 <div 
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')" }}
                 ></div>

                 <div className="relative z-10 p-10 flex flex-col md:flex-row items-center gap-10 w-full">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                             <Warehouse className="text-slate-900" size={28} />
                             <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">Infraestrutura</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase">Armazenagem DG</h3>
                        <p className="text-gray-600 mb-6 max-w-lg text-sm">
                           Armazéns licenciados e compartimentados por classe de risco (Inflamáveis, Corrosivos, Tóxicos).
                        </p>
                        <Link href="/services" className="text-slate-900 font-bold text-sm uppercase hover:text-yellow-600 transition-colors inline-flex items-center gap-2">
                            Ver Classes Atendidas <ArrowRight size={16} />
                        </Link>
                    </div>
                    
                    <div className="hidden md:flex gap-4 grayscale opacity-30 group-hover:opacity-50 transition-opacity">
                        <Box size={60} />
                        <ShieldCheck size={60} />
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
               Sua carga exige rigor técnico?
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light">
               Não arrisque com generalistas. Fale com a engenharia logística da DG-MEC.
            </p>
            <Link href="/contact" className="inline-block bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold py-4 px-10 hover:bg-yellow-500 hover:text-slate-900 transition-all uppercase text-sm tracking-widest">
                Falar com Especialista
            </Link>
         </div>
      </section>

    </main>
  );
}