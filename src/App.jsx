import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#ededed] font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
