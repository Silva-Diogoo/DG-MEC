import Link from 'next/link';
import { Ship, Plane, Truck, Warehouse, FileCheck, Box, Shield, ArrowRight, AlertTriangle, Flame, Zap, Skull, Biohazard, Droplets, ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="flex-col min-h-screen bg-gray-50">
      
      {/* --- HEADER COM IMAGEM FULL --- */}
      <section className="relative h-[450px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070')" }}
        ></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-10">
          <div className="inline-block border border-yellow-500 px-4 py-1 rounded text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4 bg-slate-900/50 backdrop-blur-md">
            Expertise Global
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 uppercase tracking-tight drop-shadow-lg">
            Nossas Soluções
          </h1>
          <p className="text-gray-200 text-lg font-light max-w-2xl mx-auto drop-shadow-md">
            Gerenciamento logístico de ponta a ponta para cargas sensíveis e complexas.
          </p>
        </div>
      </section>

      {/* --- GRID MOSAICO (ESTILO BIG TECH) --- */}
      <section className="px-4 -mt-24 relative z-30 pb-24">
        <div className="max-w-7xl mx-auto">
          
          {/* O GRID ASSIMÉTRICO */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* CARD 1: MARÍTIMO (DESTAQUE GRANDE COM FOTO) */}
            <div className="lg:col-span-2 relative group overflow-hidden rounded-xl shadow-xl cursor-pointer h-[400px]">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=2070')" }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-yellow-500 p-2 rounded text-slate-900"><Ship size={24} /></div>
                        <span className="text-yellow-500 font-bold text-sm tracking-widest uppercase">Carro Chefe</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Importação Marítima DG</h3>
                    <p className="text-gray-300 max-w-lg mb-6 line-clamp-2 group-hover:line-clamp-none transition-all">
                        Consolidação LCL/FCL especializada. Verificação de IMDG Code e coordenação direta com armadores globais.
                    </p>
                    <span className="inline-flex items-center gap-2 text-white font-bold border-b border-yellow-500 pb-1 group-hover:text-yellow-400 transition-colors">
                        Detalhes da Operação <ArrowRight size={16} />
                    </span>
                </div>
            </div>

            {/* CARD 2: AÉREO (DESTAQUE VERTICAL) */}
            <div className="relative group overflow-hidden rounded-xl shadow-xl cursor-pointer h-[400px] bg-slate-800">
                 <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40"
                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070')" }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
                
                <div className="absolute bottom-0 left-0 p-8">
                    <div className="bg-slate-700/50 w-fit p-2 rounded text-white mb-4 backdrop-blur-sm"><Plane size={24} /></div>
                    <h3 className="text-2xl font-bold text-white mb-2">Aéreo Expresso DG</h3>
                    <p className="text-gray-400 text-sm mb-6">
                        Prioridade de embarque para cargas críticas (IATA-DGR). Agilidade e precisão documental.
                    </p>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-yellow-500 group-hover:text-slate-900 transition-all">
                        <ChevronRight />
                    </div>
                </div>
            </div>

            {/* LINHA 2: CARDS TÉCNICOS (BRANCOS) */}
            <ServiceCardSimple 
                icon={<Truck size={28} />}
                title="Rodoviário Homologado"
                desc="Frota certificada ANTT com motoristas MOPP para transporte interno seguro."
            />
            
            <ServiceCardSimple 
                icon={<Warehouse size={28} />}
                title="Armazenagem DG"
                desc="Centros de distribuição compartimentados por classe de risco (Inflamáveis/Tóxicos)."
            />

             <ServiceCardSimple 
                icon={<FileCheck size={28} />}
                title="Desembaraço Aduaneiro"
                desc="Assessoria completa para LI e liberação de cargas reguladas na Receita Federal."
            />

            {/* LINHA 3: CARDS LARGOS (MENORES) */}
            <div className="md:col-span-1.5 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-gray-100 p-3 rounded text-slate-600"><Box size={24}/></div>
                <div>
                    <h4 className="font-bold text-slate-900">Embalagens Homologadas</h4>
                    <p className="text-xs text-gray-500">Fornecimento UN Certified Packaging.</p>
                </div>
            </div>

            <div className="md:col-span-1.5 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-gray-100 p-3 rounded text-slate-600"><Shield size={24}/></div>
                <div>
                    <h4 className="font-bold text-slate-900">Seguro Internacional</h4>
                    <p className="text-xs text-gray-500">Cobertura Door-to-Door para riscos complexos.</p>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SEÇÃO TÉCNICA ESCURA (AGORA SUAVIZADA) --- */}
      {/* Adicionamos um padding top grande e margem negativa para criar sobreposição visual se quisesse, mas aqui vamos usar separação limpa */}
      {/* --- CTA FINAL DE ALTO IMPACTO --- */}
      <section className="bg-yellow-500 py-20 relative overflow-hidden">
         {/* Textura de fundo sutil (listras industriais) */}
         <div className="absolute inset-0 opacity-10" 
              style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)", backgroundSize: "10px 10px" }}>
         </div>

         <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">
               Sua carga se enquadra nessas classes?
            </h2>
            <p className="text-slate-800 text-lg mb-10 font-medium max-w-2xl mx-auto">
               A classificação incorreta pode gerar multas milionárias e retenção de carga. 
               Fale agora com nossos Engenheiros Químicos para análise da FISPQ.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-slate-900 text-white font-bold py-5 px-12 rounded hover:bg-slate-800 transition-all uppercase text-sm tracking-widest shadow-2xl hover:-translate-y-1">
                Solicitar Análise Técnica <ArrowRight size={18} className="text-yellow-500" />
            </Link>
         </div>
      </section>

    </main>
  );
}

// --- COMPONENTES ---

function ServiceCardSimple({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="text-slate-400 group-hover:text-yellow-500 transition-colors mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
                {desc}
            </p>
        </div>
    )
}

function RiskItem({ number, title, icon }: { number: string, title: string, icon: React.ReactNode }) {
    return (
        <div className="bg-slate-900 p-8 hover:bg-slate-800 transition-colors group flex flex-col items-center text-center gap-4 relative">
            <div className="absolute top-4 right-4 text-slate-700 text-xs font-bold opacity-50">CLASSE {number}</div>
            <div className="text-slate-500 group-hover:text-yellow-400 transition-colors transform group-hover:scale-110 duration-300">
                {icon}
            </div>
            <span className="text-gray-300 font-bold uppercase text-sm group-hover:text-white tracking-wide">{title}</span>
        </div>
    )
}