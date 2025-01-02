import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <footer className="bg-gray-800 text-white py-6 text-center">
          <p>&copy; {new Date().getFullYear()} Personal Priscilla Alonso. Todos os direitos reservados.</p>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;