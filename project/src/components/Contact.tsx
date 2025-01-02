import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("Dd_eE8-RohF7x-H7o"); // You need to replace this with your actual EmailJS public key
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_2d5aiyh', // Replace with your EmailJS service ID
        'template_3v9z8hj', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'priscilla.alonsomv@gmail.com',
          reply_to: formData.email,
        }
      );

      toast.success(language === 'pt' ? 'Mensagem enviada com sucesso!' : '¡Mensaje enviado con éxito!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error(language === 'pt' ? 'Erro ao enviar mensagem.' : 'Error al enviar el mensaje.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.contact.title}</h2>
          <p className="text-gray-600">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-emerald-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Teléfono</h3>
                <p className="text-gray-600">+34 658 62 74 02</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-emerald-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">priscilla.alonsomv@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Ubicación</h3>
                <p className="text-gray-600">Alicante, España</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contact.form.name}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contact.form.email}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder={t.contact.form.message}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition duration-300 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                language === 'pt' ? 'Enviando...' : 'Enviando...'
              ) : (
                t.contact.form.submit
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}