import React from 'react';
import { Trophy, Code2 } from 'lucide-react';

const Awards = () => {
  return (
    <section
      id="awards"
      className="py-24 relative z-10 border-y border-white/10 bg-linear-to-b from-black/50 to-purple-900/10"
      aria-labelledby="awards-heading"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="awards-heading" className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Competitive <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-amber-600">Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognized for pushing the boundaries in web architecture and problem-solving at the <strong className="text-white">Inspiro 26</strong> National Level IT Fest.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {/* Award 1 */}
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-linear-to-r from-yellow-500/20 to-amber-500/20 rounded-3xl blur-xl transition-all duration-300 group-hover:blur-2xl opacity-50 group-hover:opacity-100"></div>
            <div className="relative h-full glass-card border border-yellow-500/30 p-10 rounded-3xl overflow-hidden flex flex-col items-center text-center group-hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-12 -right-12 text-yellow-500/10 rotate-12 group-hover:rotate-45 transition-transform duration-700">
                <Trophy size={160} />
              </div>
              <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6 border border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                <Trophy size={40} className="text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 font-heading">2nd Place</h3>
              <h4 className="text-xl font-medium text-yellow-300 mb-4">Web Designing</h4>
              <p className="text-gray-400">
                Awarded for crafting the most innovative, responsive, and visually stunning web experience under strict time constraints.
              </p>
            </div>
          </div>

          {/* Award 2 */}
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl transition-all duration-300 group-hover:blur-2xl opacity-50 group-hover:opacity-100"></div>
            <div className="relative h-full glass-card border border-cyan-500/30 p-10 rounded-3xl overflow-hidden flex flex-col items-center text-center group-hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -bottom-12 -left-12 text-cyan-500/10 -rotate-12 group-hover:-rotate-45 transition-transform duration-700">
                <Code2 size={160} />
              </div>
              <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6 border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                <Code2 size={40} className="text-cyan-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 font-heading">2nd Place</h3>
              <h4 className="text-xl font-medium text-cyan-300 mb-4">Debugging</h4>
              <p className="text-gray-400">
                Recognized for exceptional problem-solving skills, identifying and resolving complex algorithmic issues swiftly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
