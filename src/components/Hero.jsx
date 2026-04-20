import React from 'react';
import { MapPin, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      }
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-[#0a0a0f]">
      {/* Slow-moving Atmospheric Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-purple-900/10 rounded-full blur-[120px] origin-center"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[50rem] h-[50rem] bg-indigo-900/10 rounded-full blur-[150px] origin-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0a0a0f_80%)]" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="font-heading text-6xl md:text-[8rem] leading-none font-extrabold tracking-tighter mb-4"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #a1a1aa 50%, #3f3f46 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.8)) drop-shadow(0px 0px 40px rgba(168,85,247,0.3))",
          }}
        >
          Navaf V
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 mb-6 drop-shadow-md"
        >
          Full-Stack Developer & BCA Student
        </motion.h2>

        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
          </span>
          <MapPin size={16} className="text-purple-300" />
          <span className="text-sm font-medium text-gray-300 tracking-wide">Kannur, Kerala</span>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <a 
            href="#projects" 
            className="group relative flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold w-full sm:w-auto overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            {/* Hover sheen effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10">View My Arsenal</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <a 
            href="#contact" 
            className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white w-full sm:w-auto overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-white/5"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.02)",
            }}
          >
            {/* Glowing metallic border effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20" />
            <div className="absolute inset-[-2px] -z-10 rounded-full opacity-0 group-hover:opacity-100 blur-md bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 transition-opacity duration-500" />
            
            <Mail size={20} className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300" />
            <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">Get in Touch</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
