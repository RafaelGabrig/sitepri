import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setLanguage('pt')}
        className={`px-2 py-1 rounded ${
          language === 'pt' ? 'bg-emerald-600 text-white' : 'text-gray-600'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`px-2 py-1 rounded ${
          language === 'es' ? 'bg-emerald-600 text-white' : 'text-gray-600'
        }`}
      >
        ES
      </button>
    </div>
  );
}