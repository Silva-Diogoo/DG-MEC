"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function TrackingForm() {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      router.push(`/tracking/${code.toUpperCase()}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="bg-white p-2 rounded shadow-xl flex max-w-lg mx-auto">
      <div className="flex-1 flex items-center px-4">
        <Search className="text-gray-400 mr-2" size={20} />
        <input 
          type="text" 
          placeholder="Ex: BR123456" 
          className="w-full outline-none text-slate-900"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-6 py-3 rounded transition-colors uppercase text-sm">
        Rastrear
      </button>
    </form>
  );
}