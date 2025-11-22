import Link from 'next/link';
import { Ship, Plane, Truck, Warehouse, FileCheck, Box, Shield, ArrowRight, AlertTriangle, Flame, Zap, Skull, Biohazard, Droplets } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="flex-col min-h-screen bg-white">
      
      {/* --- HEADER COM IMAGEM FULL --- */}
      <section className="relative h-[450px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070')" }}
        ></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-10">
          <div className="inline-block border border-yellow-500 px-4 py-1 rounded text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4 bg-slate-900/50 backdrop-blur-md">
            Expertise Global
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tight drop-shadow-lg">
            Nossas Soluções
          </h1>
          <p className="text-gray-200 text-lg font-medium max-w-2xl mx-auto drop-shadow-md">
            Gerenciamento logístico de ponta a ponta para cargas sensíveis e complexas.
          </p>
        </div>
      </section>

      {/* --- GRID MOSAICO --- */}
      <section className="px-4 -mt-24 relative z-30 pb-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* CARD 1: MARÍTIMO */}
            <div className="lg:col-span-2 relative group overflow-hidden rounded-sm shadow-2xl cursor-pointer h-[400px] border-b-4 border-yellow-500">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=2070')" }}>
                </div>
                <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/70 transition-colors"></div>
                
                <div className="absolute bottom-0 left-0 p-10 w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-yellow-500 p-2 rounded-sm text-slate-900"><Ship size={24} /></div>
                        <span className="text-yellow-500 font-bold text-xs tracking-widest uppercase">Carro Chefe</span>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2 uppercase">Importação Marítima DG</h3>
                    <p className="text-gray-300 max-w-lg mb-6 line-clamp-2 group-hover:line-clamp-none transition-all text-sm font-medium">
                        Consolidação LCL/FCL especializada. Verificação de IMDG Code e coordenação direta com armadores globais.
                    </p>
                    <span className="inline-flex items-center gap-2 text-white font-bold border-b border-yellow-500 pb-1 group-hover:text-yellow-400 transition-colors text-xs uppercase tracking-wide">
                        Detalhes da Operação <ArrowRight size={14} />
                    </span>
                </div>
            </div>

            {/* CARD 2: AÉREO */}
            <div className="relative group overflow-hidden rounded-sm shadow-2xl cursor-pointer h-[400px] bg-slate-800 border-b-4 border-slate-600 hover:border-yellow-500 transition-colors">
                 <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-20 group-hover:opacity-30"
                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070')" }}>
                </div>
                
                <div className="absolute bottom-0 left-0 p-8">
                    <div className="bg-slate-700/50 w-fit p-2 rounded-sm text-white mb-4 backdrop-blur-sm"><Plane size={24} /></div>
                    <h3 className="text-2xl font-black text-white mb-2 uppercase">Aéreo Expresso DG</h3>
                    <p className="text-gray-400 text-xs mb-6 font-medium">
                        Prioridade de embarque para cargas críticas (IATA-DGR). Agilidade e precisão documental.
                    </p>
                </div>
            </div>

            {/* CARDS MENORES (Brancos) */}
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

            <div className="md:col-span-1.5 bg-white p-8 rounded-sm shadow-sm border border-gray-200 flex items-center gap-6 hover:shadow-xl transition-shadow group">
                <div className="bg-gray-100 p-3 rounded text-slate-400 group-hover:text-slate-900 transition-colors"><Box size={24}/></div>
                <div>
                    <h4 className="font-bold text-slate-900 uppercase text-sm mb-1">Embalagens Homologadas</h4>
                    <p className="text-xs text-gray-500 font-medium">Fornecimento UN Certified Packaging.</p>
                </div>
            </div>

            <div className="md:col-span-1.5 bg-white p-8 rounded-sm shadow-sm border border-gray-200 flex items-center gap-6 hover:shadow-xl transition-shadow group">
                <div className="bg-gray-100 p-3 rounded text-slate-400 group-hover:text-slate-900 transition-colors"><Shield size={24}/></div>
                <div>
                    <h4 className="font-bold text-slate-900 uppercase text-sm mb-1">Seguro Internacional</h4>
                    <p className="text-xs text-gray-500 font-medium">Cobertura Door-to-Door para riscos complexos.</p>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SEÇÃO TÉCNICA ESCURA --- */}
      {/* --- SEÇÃO TÉCNICA: FAIXA DE SINALIZAÇÃO (NOVO DESIGN) --- */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
         
         {/* Linha decorativa superior */}
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-yellow-500 to-slate-800"></div>

         <div className="max-w-7xl mx-auto px-4 text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-slate-700 rounded-full text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
               <Shield size={12} /> Normas IMDG & IATA
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
               Classes de Risco <span className="text-yellow-500">Homologadas</span>
            </h2>
         </div>

         {/* A NOVA ESTRUTURA: FAIXA DE BADGES */}
         <div className="max-w-7xl mx-auto px-4">
             <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                
                {/* Badge 1: Explosivos */}
                <RiskBadge number="1" title="Explosivos" icon={<AlertTriangle size={18}/>} />
                
                {/* Badge 2: Gases */}
                <RiskBadge number="2" title="Gases" icon={<Zap size={18}/>} />
                
                {/* Badge 3: Líquidos Inflamáveis */}
                <RiskBadge number="3" title="Líq. Inflamáveis" icon={<Flame size={18}/>} />
                
                {/* Badge 4: Sólidos Inflamáveis */}
                <RiskBadge number="4" title="Sól. Inflamáveis" icon={<Flame size={18}/>} />
                
                {/* Badge 5: Oxidantes */}
                <RiskBadge number="5" title="Oxidantes" icon={<AlertTriangle size={18}/>} />
                
                {/* Badge 6: Tóxicos */}
                <RiskBadge number="6" title="Tóxicos" icon={<Biohazard size={18}/>} />
                
                {/* Badge 8: Corrosivos */}
                <RiskBadge number="8" title="Corrosivos" icon={<Droplets size={18}/>} />
                
                {/* Badge 9: Diversos */}
                <RiskBadge number="9" title="Diversos" icon={<Skull size={18}/>} />

             </div>

             {/* Nota técnica sutil abaixo */}
             <p className="text-center text-slate-600 text-xs mt-12 font-mono">
                *Exceto cargas radioativas (Classe 7) ou proibidas pela legislação vigente.
             </p>
         </div>
      </section>
      
      {/* --- CTA FINAL COMPACTO (Igual a Home) --- */}
      <section className="py-8 bg-slate-900 border-t border-slate-800">
         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="text-center md:text-left">
                <h2 className="text-lg font-bold text-white uppercase tracking-tight flex items-center justify-center md:justify-start gap-3">
                   <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                   Sua carga se enquadra nessas classes?
                </h2>
                <p className="text-gray-400 text-xs font-medium mt-2 max-w-xl">
                   A classificação incorreta gera multas milionárias. Fale agora com nossos Engenheiros Químicos.
                </p>
            </div>

            <Link href="/contact" className="whitespace-nowrap bg-transparent border border-yellow-500 text-yellow-500 font-bold py-3 px-8 hover:bg-yellow-500 hover:text-slate-900 transition-all uppercase text-[10px] tracking-widest rounded-sm">
                Solicitar Análise Técnica
            </Link>

         </div>
      </section>

    </main>
  );
}

// --- COMPONENTES ---

function ServiceCardSimple({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-white p-8 rounded-sm border border-gray-200 shadow-sm hover:shadow-xl hover:border-slate-900 transition-all duration-300 group">
            <div className="text-slate-400 group-hover:text-slate-900 transition-colors mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {desc}
            </p>
        </div>
    )
}

function RiskBadge({ number, title, icon }: { number: string, title: string, icon: React.ReactNode }) {
    return (
        <div className="group flex items-center gap-4 bg-slate-900 border border-slate-800 pr-6 rounded hover:border-yellow-500 hover:bg-slate-800 transition-all duration-300 cursor-default min-w-[200px]">
            
            {/* O DIAMANTE DE RISCO (Estilo Placa de Caminhão) */}
            <div className="relative w-14 h-14 flex-shrink-0 bg-slate-800 group-hover:bg-yellow-500 transition-colors flex items-center justify-center overflow-hidden">
                {/* Triângulo Amarelo Decorativo no canto */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-yellow-500 rotate-45 translate-x-2 -translate-y-2 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform"></div>
                
                <div className="flex flex-col items-center">
                    <div className="text-slate-500 group-hover:text-slate-900 transition-colors scale-75">
                        {icon}
                    </div>
                    <span className="text-white font-black text-sm mt-1 group-hover:text-slate-900 transition-colors">{number}</span>
                </div>
            </div>

            {/* Texto */}
            <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest group-hover:text-yellow-500 transition-colors">Classe</span>
                <span className="text-sm font-bold text-gray-300 group-hover:text-white uppercase whitespace-nowrap">{title}</span>
            </div>
        </div>
    )
}