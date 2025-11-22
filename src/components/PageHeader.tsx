import React from 'react';

interface Props {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="relative h-[300px] flex items-center justify-center bg-slate-900">
      {/* Imagem de fundo genérica de logística escura */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')" }}
      ></div>
      
      <div className="relative z-10 text-center px-4 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
          {title}
        </h1>
        <div className="w-20 h-1.5 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
          {subtitle}
        </p>
      </div>
    </section>
  );
}