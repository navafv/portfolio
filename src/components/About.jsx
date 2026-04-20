import React from 'react';
import { Terminal, Database, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-transparent"></span>
            </h2>
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px]"></div>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                I am a passionate <strong className="text-purple-300 font-semibold">Full-Stack Developer</strong> and currently a BCA student at <strong className="text-indigo-300 font-semibold">Jamia Hamdard Kannur Campus</strong> (Expected 2028). My focus lies in designing end-to-end production systems that solve complex problems and scale seamlessly.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Whether it's crafting responsive web frontends, engineering <strong className="text-indigo-300 font-semibold">robust REST APIs</strong>, or architecting backend infrastructures with <strong className="text-purple-300 font-semibold">complex PostgreSQL/SQLite databases</strong>, I thrive on delivering solutions that are both reliable and beautiful.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl glass-card-hover flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                <Terminal size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Production Ready</h3>
              <p className="text-sm text-gray-400">Clean architecture and scalable deployments.</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl glass-card-hover flex flex-col items-center text-center sm:translate-y-8">
              <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                <Server size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">REST APIs</h3>
              <p className="text-sm text-gray-400">Secure and efficient backend services.</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl glass-card-hover flex flex-col items-center text-center sm:-translate-y-8">
              <div className="w-14 h-14 rounded-full bg-pink-500/20 flex items-center justify-center mb-4 text-pink-400">
                <Database size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Complex DBs</h3>
              <p className="text-sm text-gray-400">Optimized queries and solid data modeling.</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-900/30 to-transparent border-purple-500/20">
              <h3 className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">2+</h3>
              <p className="text-sm text-gray-300 font-medium">Years Coding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
