import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import brandLogo from './assets/logo.png';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Seo from './components/Seo';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#ededed] font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <Seo />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center" aria-label="Navaf V home">
            <img
              src={brandLogo}
              alt="Navaf V logo"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </a>
          <nav aria-label="Primary" className="hidden gap-6 text-sm text-gray-300 md:flex">
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <a href="#projects" className="transition-colors hover:text-white">Projects</a>
            <a href="#awards" className="transition-colors hover:text-white">Awards</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </nav>
          <button
            type="button"
            className="text-gray-300 transition-colors hover:text-white md:hidden"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMobileMenuOpen ? (
          <div
            id="mobile-navigation"
            className="w-full border-b border-white/5 bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col px-6 py-4 text-sm text-gray-300">
              <a
                href="#about"
                className="py-3 transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="py-3 transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#awards"
                className="py-3 transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Awards
              </a>
              <a
                href="#contact"
                className="py-3 transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        ) : null}
      </header>
      <main id="main-content">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
