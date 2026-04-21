import React, { useState, useEffect } from 'react';
import { GitBranch, FolderOpen, Mail, Clock } from 'lucide-react';
import brandLogo from '../assets/logo.png';

const Footer = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Format to IST (Indian Standard Time)
      const optionsTime = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const optionsDate = {
        timeZone: 'Asia/Kolkata',
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      };

      setTime(new Intl.DateTimeFormat('en-US', optionsTime).format(now));
      setDate(new Intl.DateTimeFormat('en-US', optionsDate).format(now));
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="relative border-t border-white/5 bg-black/40 pt-16 pb-8 z-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <img
              src={brandLogo}
              alt="Navaf V logo"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-xl font-heading font-bold text-white tracking-wide">Navaf V</h3>
          </div>
          <p className="text-sm text-gray-500">Full-Stack Developer & BCA Student</p>
        </div>

        {/* Dynamic IST Clock */}
        <div className="glass-card px-6 py-3 rounded-2xl flex items-center gap-4 border-purple-500/20">
          <Clock className="text-purple-400" size={20} />
          <div className="flex flex-col">
            <span className="text-white font-mono font-medium tracking-wider">{time} IST</span>
            <span className="text-xs text-gray-400">{date}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/navafv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
          >
            <GitBranch size={18} />
          </a>
          <a
            href="#projects"
            aria-label="Jump to projects"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
          >
            <FolderOpen size={18} />
          </a>
          <a
            href="#contact"
            aria-label="Jump to contact form"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-300"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Navaf V. All rights reserved.</p>
        <p>Engineered with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
