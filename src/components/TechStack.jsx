import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'React', color: 'text-cyan-400' },
  { name: 'Vite', color: 'text-purple-400' },
  { name: 'Tailwind CSS', color: 'text-teal-400' },
  { name: 'Python', color: 'text-yellow-400' },
  { name: 'Django', color: 'text-green-500' },
  { name: 'Flutter', color: 'text-blue-400' },
  { name: 'PostgreSQL', color: 'text-blue-300' },
  { name: 'SQLite', color: 'text-blue-200' },
];

const TechStack = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black/20 border-y border-white/5">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <h2 className="font-heading text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
          Technologies I command
        </h2>
      </div>

      <div className="relative w-full overflow-hidden flex z-10">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10"></div>
        
        <div className="flex animate-scrolling-text w-max">
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <div 
              key={index}
              className="mx-4 md:mx-8 glass-card px-8 py-4 rounded-xl flex items-center justify-center whitespace-nowrap hover:border-purple-500/50 transition-colors duration-300"
            >
              <span className={`text-xl font-semibold font-heading ${tech.color}`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default TechStack;
