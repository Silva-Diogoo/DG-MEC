import Link from 'next/link';
import { Package, MapPin, Phone, Mail, Linkedin, Instagram, Facebook, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* GRID DE 4 COLUNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUNA 1: MARCA & SOBRE */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 group">
                <div className="p-2 bg-yellow-500 rounded text-slate-900">
                   <Package size={24} strokeWidth={2} />
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white">
                DG-MEC <span className="text-yellow-500">LOGISTICS</span>
                </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-500">
              Operador Logístico Internacional especializado no gerenciamento de cargas perigosas e complexas. Segurança, Compliance e OEA.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
            </div>
          </div>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Navegação
            </h4>
            <ul className="space-y-3 text-sm">
              <FooterLink text="Início" href="/" />
              <FooterLink text="Sobre a DG-MEC" href="/about" />
              <FooterLink text="Nossos Serviços" href="/services" />
              <FooterLink text="Compliance & OEA" href="/services" />
              <FooterLink text="Fale Conosco" href="/contact" />
            </ul>
          </div>

          {/* COLUNA 3: SERVIÇOS TÉCNICOS */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Especialidades
            </h4>
            <ul className="space-y-3 text-sm">
              <FooterLink text="Importação Marítima DG" href="/services" />
              <FooterLink text="Frete Aéreo Expresso" href="/services" />
              <FooterLink text="Armazenagem Certificada" href="/services" />
              <FooterLink text="Desembaraço Aduaneiro" href="/services" />
              <FooterLink text="Consultoria FISPQ" href="/contact" />
            </ul>
          </div>

          {/* COLUNA 4: CONTATO */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Central DG
            </h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-yellow-500 mt-1 shrink-0 group-hover:text-white transition-colors" size={20} />
                <span>Av. Paulista, 1000 - 15º Andar<br />São Paulo - SP, Brasil</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="text-yellow-500 shrink-0 group-hover:text-white transition-colors" size={20} />
                <span className="font-bold text-white tracking-wide">+55 (11) 3090-0000</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-yellow-500 shrink-0 group-hover:text-white transition-colors" size={20} />
                <a href="mailto:comercial@dgmec.com" className="hover:text-yellow-500 transition-colors">comercial@dgmec.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* BARRA INFERIOR: COPYRIGHT & CERTIFICAÇÕES */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          
          <p>© {new Date().getFullYear()} DG-MEC Logistics. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                <ShieldCheck size={16} /> <span className="font-bold">OEA-S</span>
             </div>
             <Link href="/privacy" className="hover:text-slate-300 transition-colors">Política de Privacidade</Link>
             <Link href="/terms" className="hover:text-slate-300 transition-colors">Termos de Uso</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

// --- PEQUENOS COMPONENTES PARA REUTILIZAR ---

function FooterLink({ text, href }: { text: string, href: string }) {
  return (
    <li>
      <Link href={href} className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 group">
        <ArrowRight size={12} className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        {text}
      </Link>
    </li>
  )
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300 border border-slate-800 hover:border-yellow-500">
      {icon}
    </a>
  )
}