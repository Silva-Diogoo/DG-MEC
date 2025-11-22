import Link from 'next/link';
import { 
  Globe, 
  Truck, 
  ShieldCheck, 
  Anchor, 
  FileCheck, 
  Award, 
  ArrowRight, 
  Warehouse, 
  Box, 
  HardHat,      // Adicionado
  TrendingUp,   // Adicionado
  Clock,        // Adicionado
  AlertTriangle, 
  Zap, 
  Flame, 
  Biohazard, 
  Droplets, 
  Skull 
} from 'lucide-react';
import TrackingForm from '@/components/TrackingForm';

export default function Home() {
  return (
    <main className="flex-col min-h-screen bg-white">
      
      {/* 1. HERO SECTION (AJUSTADA PARA MOBILE) */}
      {/* Mudei h-[580px] para min-h-[600px] md:h-[580px] e adicionei py-20 para dar espaço no celular */}
      <section className="relative min-h-[600px] md:h-[580px] flex items-center justify-center overflow-hidden py-20 md:py-0">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070')" }}
        ></div>
        <div className="absolute inset-0 z-10 bg-slate-950/90"></div>

        {/* O Grid agora quebra linha no mobile automaticamente */}
        <div className="relative z-20 w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Texto Principal */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500 text-slate-950 text-[10px] font-bold uppercase mb-6 tracking-widest border border-yellow-600">
               <Globe size={12} />
               Rota Espanha → Brasil
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
              SEGURANÇA QUE <br/>
              <span className="text-yellow-500">MOVIMENTA O MUNDO.</span>
            </h1>
            <p className="text-gray-400 text-base mb-8 max-w-lg font-medium leading-relaxed border-l-4 border-yellow-500 pl-4">
              Operador Logístico Internacional especializado em cargas perigosas (DG). 
              Conformidade IATA, OEA e rigor técnico absoluto.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="bg-yellow-500 text-slate-950 font-bold py-3 px-8 hover:bg-white transition-colors uppercase text-xs tracking-widest">
                  Solicitar Cotação
              </Link>
              <Link href="/services" className="group flex items-center gap-2 text-white font-bold py-3 px-6 border border-white/30 hover:bg-white/10 transition-all uppercase text-xs tracking-widest">
                  Nossos Serviços <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform text-yellow-500" />
              </Link>
            </div>
          </div>

          {/* WIDGET DE RASTREIO (Agora visível no mobile) */}
          {/* Removi 'hidden' e ajustei a largura para w-full no mobile */}
          <div className="relative w-full mt-8 md:mt-0">
            <div className="bg-slate-900 border-t-4 border-yellow-500 p-6 shadow-2xl w-full md:max-w-md md:ml-auto ring-1 ring-white/10 rounded-sm">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-3 uppercase tracking-wide">
                <Truck className="text-yellow-500" size={20} />
                Rastreamento DG
              </h3>
              
              <TrackingForm />
              
              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                 <div className="flex items-center gap-2">
                    <ShieldCheck className="text-emerald-500 w-6 h-6" />
                    <div>
                        <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Certificação</p>
                        <p className="text-white font-bold text-xs">100% OEA & ANTT</p>
                    </div>
                 </div>
                 <div className="text-right">
                    <p className="text-yellow-500 text-[10px] font-bold">MONITORAMENTO 24/7</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm"><Award size={18}/> IATA <span className="text-gray-500 text-[10px] uppercase font-bold">Dangerous Goods</span></div>
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm"><Anchor size={18}/> IMDG <span className="text-gray-500 text-[10px] uppercase font-bold">Code</span></div>
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm"><ShieldCheck size={18}/> OEA <span className="text-gray-500 text-[10px] uppercase font-bold">Certificado</span></div>
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm"><Truck size={18}/> ANTT <span className="text-gray-500 text-[10px] uppercase font-bold">Homologado</span></div>
        </div>
      </div>

      {/* 3. GRID DE SERVIÇOS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
           <div className="mb-10 border-l-8 border-slate-900 pl-6 flex flex-col md:flex-row justify-between md:items-end gap-4">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">Logística de Alta Complexidade</h2>
                <p className="text-gray-600 max-w-2xl text-base font-medium">
                    Gerenciamento de risco e integridade para cargas químicas e industriais.
                </p>
              </div>
              <Link href="/services" className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase border-b-2 border-yellow-500 pb-1 hover:text-yellow-600 transition-colors tracking-widest w-fit">
                 Ver Portfólio Completo <ArrowRight size={14} />
              </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[500px]">
              <div className="md:col-span-2 bg-slate-900 relative group cursor-pointer border-b-4 border-yellow-500 overflow-hidden min-h-[250px] md:min-h-0">
                 <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-in-out"
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=2070')" }}></div>
                 <div className="relative z-10 h-full flex flex-col justify-between p-8">
                    <div className="flex justify-between items-start">
                        <div className="bg-black/50 border border-yellow-500/50 p-2 text-yellow-500 backdrop-blur-sm"><Globe size={24} strokeWidth={1.5} /></div>
                        <div className="text-white text-[10px] font-bold border border-white/30 px-2 py-1 uppercase tracking-widest backdrop-blur-sm">Fluxo Prioritário</div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-white mb-2 uppercase">Importação Espanha → Brasil</h3>
                        <p className="text-gray-300 max-w-md text-xs leading-relaxed font-medium">Coordenação internacional direta. Booking em armadores e liberação final.</p>
                    </div>
                 </div>
              </div>

              <div className="bg-white border border-gray-300 p-6 hover:border-slate-900 transition-colors group hover:shadow-xl">
                 <div className="mb-4 text-slate-400 group-hover:text-slate-900 transition-colors"><FileCheck size={32} strokeWidth={1.5} /></div>
                 <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Compliance & OEA</h3>
                 <p className="text-gray-600 text-xs leading-relaxed">Operações auditáveis e alinhadas às exigências da Receita Federal.</p>
              </div>

              <div className="bg-white border border-gray-300 p-6 hover:border-slate-900 transition-colors group hover:shadow-xl">
                 <div className="mb-4 text-slate-400 group-hover:text-slate-900 transition-colors"><Truck size={32} strokeWidth={1.5} /></div>
                 <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Frota Homologada</h3>
                 <p className="text-gray-600 text-xs leading-relaxed">Veículos certificados ANTT e motoristas com treinamento MOPP.</p>
              </div>

              <div className="md:col-span-2 bg-slate-100 relative group cursor-pointer flex items-center border-l-4 border-slate-300 hover:border-yellow-500 transition-colors overflow-hidden min-h-[200px] md:min-h-0">
                 <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')" }}></div>
                 <div className="relative z-10 p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3"><Warehouse className="text-slate-900" size={20} /><span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Infraestrutura</span></div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase">Armazenagem DG</h3>
                        <p className="text-gray-600 mb-4 max-w-lg text-xs">Armazéns licenciados e compartimentados por classe de risco.</p>
                    </div>
                    <div className="hidden md:flex gap-4 grayscale opacity-30 group-hover:opacity-50 transition-opacity"><Box size={48} /><ShieldCheck size={48} /></div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. DIFERENCIAIS TÉCNICOS */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative h-[300px] md:h-[500px] rounded-sm overflow-hidden shadow-2xl ring-1 ring-slate-900/10">
                    <div className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=1887')" }}></div>
                    <div className="absolute bottom-0 left-0 bg-slate-900 p-8 w-full md:w-3/4 border-t-4 border-yellow-500">
                        <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2">Engenharia Logística</p>
                        <p className="text-white text-sm font-light leading-relaxed">
                            "Análise de compatibilidade química e documental para zerar o risco de retenção."
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase leading-none tracking-tight">
                        Por que confiar sua carga <br/><span className="text-yellow-500">crítica a nós?</span>
                    </h2>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed font-medium">
                        No transporte de Dangerous Goods (DG), um erro documental custa caro. Nossa equipe técnica atua preventivamente.
                    </p>

                    <div className="space-y-6">
                        <FeatureRow 
                            icon={<HardHat size={24}/>} 
                            title="Corpo Técnico Especializado" 
                            text="Engenheiros químicos dedicados à análise da sua FISPQ/MSDS."
                        />
                        <FeatureRow 
                            icon={<TrendingUp size={24}/>} 
                            title="Redução de Custos Operacionais" 
                            text="Evitamos demurrage através da pré-conferência documental rigorosa."
                        />
                        <FeatureRow 
                            icon={<Clock size={24}/>} 
                            title="Agilidade no Desembaraço" 
                            text="Processos OEA garantem canal verde na Receita Federal."
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. ESTATÍSTICAS */}
      <section className="py-8 bg-slate-950 border-t border-slate-900">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
              <StatItem number="15+" label="Anos de Experiência" />
              <StatItem number="500k" label="Toneladas Transportadas" />
              <StatItem number="100%" label="Conformidade ANTT" />
              <StatItem number="0" label="Acidentes Registrados" highlight />
          </div>
      </section>

    </main>
  );
}

// --- COMPONENTES AUXILIARES ---

function FeatureRow({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
    return (
        <div className="flex gap-4 group">
            <div className="w-12 h-12 bg-slate-100 rounded-sm flex items-center justify-center text-slate-900 group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-slate-900 uppercase text-sm mb-1 tracking-wide">{title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
        </div>
    )
}

function StatItem({ number, label, highlight }: { number: string, label: string, highlight?: boolean }) {
    return (
        <div className="flex flex-col items-center justify-center p-2">
            <div className={`text-3xl md:text-4xl font-black mb-1 tracking-tighter ${highlight ? 'text-yellow-500' : 'text-white'}`}>
                {number}
            </div>
            <div className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">
                {label}
            </div>
        </div>
    )
}