import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Personal trainer"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{t.about.title}</h2>
            <p className="text-gray-600 mb-6">{t.about.description1}</p>
            <p className="text-gray-600 mb-6">{t.about.description2}</p>
            <ul className="space-y-3">
              {t.about.certifications.map((cert, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}