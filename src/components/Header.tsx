"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Package, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6';
  const textClass = isScrolled ? 'text-slate-900' : 'text-white';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="p-2 bg-yellow-500 rounded text-slate-900"><Package size={24} /></div>
          <span className={`font-bold text-2xl ${textClass}`}>DG-MEC<span className="text-yellow-500"></span></span>
        </Link>

        {/* Menu Desktop */}
        <nav className={`hidden md:flex gap-8 font-semibold text-sm uppercase ${textClass}`}>
          <Link href="/services" className="hover:text-yellow-500">Serviços</Link>
          <Link href="/about" className="hover:text-yellow-500">Sobre</Link>
          <Link href="/contact" className="hover:text-yellow-500">Contato</Link>
        </nav>

        {/* Menu Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${textClass}`}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full w-full shadow-lg p-4 flex flex-col gap-4">
           <Link href="/services" className="text-slate-900 font-bold">Serviços</Link>
           <Link href="/about" className="text-slate-900 font-bold">Sobre</Link>
        </div>
      )}
    </header>
  );
}