import PageHeader from '@/components/PageHeader';
import { CheckCircle2, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="flex-col min-h-screen bg-white">
      
      {/* Cabeçalho Padrão */}
      <PageHeader 
        title="Nossa História" 
        subtitle="Conheça a engenharia por trás da DG-MEC Logistics." 
      />

      {/* Container Centralizado estilo Blog (max-w-3xl) */}
      <article className="max-w-3xl mx-auto px-6 py-16 text-slate-800">
        
        {/* --- INTRODUÇÃO --- */}
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Nascida para a Alta Complexidade
        </h2>
        
        <p className="text-lg leading-relaxed mb-6 text-slate-600">
          A DG-MEC Logistics não foi fundada para ser apenas mais uma transportadora. Nascemos com um propósito técnico muito claro: atender setores que exigem rigor absoluto, como as indústrias <strong>Química, Farmacêutica, Mineração e Óleo & Gás</strong>.
        </p>

        <p className="text-lg leading-relaxed mb-8 text-slate-600">
          Ao contrário de operadores generalistas, atuamos como uma extensão da engenharia dos nossos clientes. Unimos experiência operacional de chão de fábrica, auditoria regulatória e gestão documental avançada.
        </p>

        {/* --- FOTO DE GRUPO INCLUSIVA --- */}
        <figure className="my-10">
           {/* Imagem de Equipe Diversa (Unsplash) */}
           <img 
             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
             alt="Equipe multidisciplinar da DG-MEC colaborando em projeto" 
             className="w-full h-auto rounded shadow-sm"
           />
           <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
             Nossa força está na união de especialistas diversos, focados na segurança da sua operação.
           </figcaption>
        </figure>

        {/* --- O DIFERENCIAL REGIONAL --- */}
        <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
          Especialistas na Rota Espanha → Brasil
        </h3>
        
        <p className="text-lg leading-relaxed mb-6 text-slate-600">
          Possuímos uma atuação muito forte no fluxo de importação vindo da Espanha. Não se trata apenas de transportar, mas de entender a cultura e a burocracia dos dois países.
        </p>
        
        <div className="bg-gray-50 p-6 border-l-4 border-yellow-500 mb-8 rounded-r">
           <p className="font-medium text-slate-700 italic">
             "Atuamos como agente de cargas e integrador logístico, coordenando diretamente com fornecedores europeus para garantir que a documentação chegue ao Brasil perfeita."
           </p>
        </div>

        {/* --- IDENTIDADE CORPORATIVA (Lista Simples) --- */}
        <h3 className="text-2xl font-bold text-slate-900 mb-6 mt-12">
          Identidade Corporativa
        </h3>

        <div className="space-y-8">
           <div>
              <h4 className="font-bold text-slate-900 uppercase text-sm tracking-wider mb-2 text-yellow-600">Nossa Missão</h4>
              <p className="text-slate-700">
                Garantir soluções logísticas seguras, ágeis e tecnicamente especializadas para o transporte internacional de cargas perigosas.
              </p>
           </div>

           <div>
              <h4 className="font-bold text-slate-900 uppercase text-sm tracking-wider mb-2 text-yellow-600">Nossa Visão</h4>
              <p className="text-slate-700">
                Ser reconhecida como referência nacional em logística internacional de DG, destacando-se pela confiabilidade, inovação e excelência operacional.
              </p>
           </div>

           <div>
              <h4 className="font-bold text-slate-900 uppercase text-sm tracking-wider mb-3 text-yellow-600">Nossos Valores</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                 <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-slate-400"/> Segurança</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-slate-400"/> Conformidade Ética</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-slate-400"/> Agilidade</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-slate-400"/> Transparência</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-slate-400"/> Resp. Ambiental</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-slate-400"/> Atendimento Consultivo</li>
              </ul>
           </div>
        </div>

        {/* --- ESTRUTURA E COMPLIANCE --- */}
        <hr className="my-12 border-gray-200" />

        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Segurança e Compliance (OEA)
        </h3>
        
        <p className="text-lg leading-relaxed mb-6 text-slate-600">
           Nosso compromisso com a segurança vai além do transporte. Adotamos rigorosas políticas de Compliance e seguimos as diretrizes do programa <strong>OEA (Authorized Economic Operator)</strong>.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-slate-600">
           Nossa estrutura organizacional é desenhada para suportar essa complexidade, com departamentos dedicados para cada etapa:
        </p>

        <ul className="space-y-2 text-slate-700 bg-slate-50 p-6 rounded">
           <li className="flex items-center gap-3"><MapPin size={16} className="text-yellow-500"/> Diretoria Executiva</li>
           <li className="flex items-center gap-3"><MapPin size={16} className="text-yellow-500"/> Compliance & Segurança DG</li>
           <li className="flex items-center gap-3"><MapPin size={16} className="text-yellow-500"/> Operações Internacionais (Marítimo e Aéreo)</li>
           <li className="flex items-center gap-3"><MapPin size={16} className="text-yellow-500"/> Desembaraço Aduaneiro</li>
           <li className="flex items-center gap-3"><MapPin size={16} className="text-yellow-500"/> Armazenagem & Handling DG</li>
        </ul>

      </article>
    </main>
  );
}