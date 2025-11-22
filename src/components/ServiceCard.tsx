import React from 'react';

interface Props {
  title: string;
  description: string; // AGORA SIM: Aceita 'description' ao invés de 'desc'
  icon: any; // Mudei para 'any' para aceitar tanto seus ícones antigos quanto os novos
}

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <div className="bg-white p-6 rounded border border-gray-100 hover:shadow-lg transition-all hover:border-yellow-400 group h-full">
      <div className="mb-4 text-slate-500 group-hover:text-yellow-500 transition-colors">
        {/* Verificação inteligente: Se for um texto (caminho da imagem), cria uma tag <img>. 
            Se for um ícone do Lucide, renderiza direto. */}
        {typeof icon === 'string' ? (
           <img src={icon} alt={title} className="w-10 h-10 object-contain" />
        ) : (
           icon
        )}
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      
      {/* Aqui usamos 'description' que é o que você está enviando */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}