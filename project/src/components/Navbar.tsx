import React from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { LanguageSwitch } from './LanguageSwitch';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-600">Personal Priscilla Alonso</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-emerald-600">{t.nav.home}</a>
            <a href="#sobre" className="text-gray-700 hover:text-emerald-600">{t.nav.about}</a>
            <a href="#servicos" className="text-gray-700 hover:text-emerald-600">{t.nav.services}</a>
            <a href="#contato" className="text-gray-700 hover:text-emerald-600">{t.nav.contact}</a>
            <LanguageSwitch />
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/priscillaalonso/" className="text-gray-700 hover:text-emerald-600">
                <Instagram size={20} />
              </a>
              
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitch />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">{t.nav.home}</a>
            <a href="#sobre" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">{t.nav.about}</a>
            <a href="#servicos" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">{t.nav.services}</a>
            <a href="#contato" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">{t.nav.contact}</a>
          </div>
        </div>
      )}
    </nav>
  );
}