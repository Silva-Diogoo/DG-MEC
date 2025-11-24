"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Package, Menu, X, User } from 'lucide-react';
import { usePathname } from 'next/navigation'; // 1. Importamos o hook de rota

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 2. Pegamos a rota atual
  const pathname = usePathname();

  // 3. Verificamos se é uma página interna (que tem fundo branco)
  // Se não for a Home ('/'), assumimos que é interna
  const isInternalPage = pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '/services' },
    { name: 'Sobre', href: '/about' },
    { name: 'Contato', href: '/contact' },
  ];

  // 4. LÓGICA DE CORES INTELIGENTE:
  // O texto fica escuro se:
  // a) A página foi rolada (isScrolled)
  // b) OU se estamos em uma página interna (isInternalPage)
  const useDarkTheme = isScrolled || isInternalPage;

  const headerClass = useDarkTheme 
    ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' // Fundo Branco
    : 'bg-transparent py-6'; // Fundo Transparente (Só na Home topo)

  const textClass = useDarkTheme 
    ? 'text-slate-900' // Texto Preto
    : 'text-white';    // Texto Branco

  const hoverClass = useDarkTheme 
    ? 'hover:text-yellow-600' 
    : 'hover:text-yellow-400';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg ${useDarkTheme ? 'bg-yellow-500 text-slate-900' : 'bg-yellow-500 text-slate-900'}`}>
              <Package size={24} strokeWidth={2} />
            </div>
            <span className={`font-extrabold text-2xl tracking-tight ${textClass}`}>
              DG-MEC
            </span>
          </Link>

          {/* NAVEGAÇÃO DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${textClass} ${hoverClass}`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Botão Área do Cliente */}
            {/* <Link
              href="/login"
              className={`flex items-center gap-2 px-4 py-2 rounded-sm font-bold text-xs uppercase tracking-widest transition-all border ${
                useDarkTheme
                  ? 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-slate-900'
              }`}
            >
              <User size={16} />
              <span>Login</span>
            </Link> */}
          </nav>

          {/* BOTÃO MENU MOBILE */}
          <button
            className={`md:hidden p-2 ${textClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE (Gaveta) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-800 font-bold py-3 border-b border-gray-100 hover:text-yellow-600 text-sm uppercase tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}