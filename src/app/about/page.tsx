import PageHeader from '@/components/PageHeader';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="flex-col min-h-screen bg-slate-50">
      <PageHeader 
        title="Sobre a DG-MEC" 
        subtitle="Empresa técnica, confiável e especializada em logística complexa." 
      /> 
      {/* [cite: 43] */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Quem Somos</h2>
               <p className="text-gray-600 mb-4 leading-relaxed">
                 A DG-MEC Logistics nasceu com foco técnico para atender setores com alta complexidade logística, como químico, farmacêutico, mineração e óleo & gás.
               </p> 
               {/* [cite: 21, 24, 26, 27] */}
               <p className="text-gray-600 leading-relaxed">
                 Atuamos como agente de cargas e integrador logístico, unindo experiência operacional, auditoria regulatória e gestão documental avançada. Nosso forte é o fluxo Espanha → Brasil.
               </p> 
               {/* [cite: 11, 12, 28] */}
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
               <div 
                 className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070')" }}
               ></div>
            </div>
          </div>

          {/* Missão, Visão e Valores extraídos do PDF [cite: 13, 15, 17] */}
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Identidade Corporativa</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <ValueCard 
               title="Missão" 
               text="Garantir soluções logísticas seguras, ágeis e tecnicamente especializadas para o transporte internacional de cargas perigosas."
               icon={<Target className="w-8 h-8 text-white" />}
             /> 
             {/* [cite: 14] */}
             
             <ValueCard 
               title="Visão" 
               text="Ser reconhecida como referência nacional em logística internacional de DG, destacando-se pela confiabilidade e inovação."
               icon={<Eye className="w-8 h-8 text-white" />}
             /> 
             {/* [cite: 16] */}

             <ValueCard 
               title="Valores" 
               text="Segurança, Conformidade Ética, Agilidade, Transparência, Responsabilidade Ambiental e Atendimento Consultivo."
               icon={<ShieldCheck className="w-8 h-8 text-white" />}
             /> 
             {/* [cite: 18] */}
          </div>
        </div>
      </section>
    </main>
  );
}

function ValueCard({ title, text, icon }: { title: string, text: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-8 rounded border-t-4 border-yellow-500 shadow-sm hover:shadow-lg transition-shadow h-full">
       <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-6 shadow-lg">
          {icon}
       </div>
       <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
       <p className="text-gray-600 text-sm">{text}</p>
    </div>
  )
}