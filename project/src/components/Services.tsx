import React from 'react';
import { Users, Target, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: <Users className="w-12 h-12 text-emerald-600" />,
      title: t.services.personalTraining.title,
      description: t.services.personalTraining.description
    },
    {
      icon: <Target className="w-12 h-12 text-emerald-600" />,
      title: t.services.onlineConsulting.title,
      description: t.services.onlineConsulting.description
    },
    {
      icon: <Heart className="w-12 h-12 text-emerald-600" />,
      title: t.services.evaluation.title,
      description: t.services.evaluation.description
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.services.title}</h2>
          <p className="text-gray-600">{t.services.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}