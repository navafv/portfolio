import React from 'react';
import { MapPin, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const MotionDiv = motion.div;
  const MotionH1 = motion.h1;
  const MotionH2 = motion.h2;
  const MotionP = motion.p;

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
    <section
      id="home"
      className="relative flex items-center justify-center pt-48 pb-24 overflow-hidden bg-[#0a0a0f]"
      aria-labelledby="hero-heading"
    >
      {/* Slow-moving Atmospheric Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <MotionDiv
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-160 h-160 bg-purple-900/10 rounded-full blur-[120px] origin-center"
        />
        <MotionDiv
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-200 h-200 bg-indigo-900/10 rounded-full blur-[150px] origin-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0f_80%)]" />
      </div>

      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center"
      >
        <MotionH1
          variants={itemVariants}
          id="hero-heading"
          className="font-heading text-6xl md:text-[8rem] leading-none font-extrabold tracking-tighter mb-4"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #a1a1aa 50%, #3f3f46 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.8)) drop-shadow(0px 0px 40px rgba(168,85,247,0.3))",
          }}
        >
          Navaf V
        </MotionH1>

        <MotionH2
          variants={itemVariants}
          className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-gray-200 via-gray-400 to-gray-600 mb-6 drop-shadow-md"
        >
          Full-Stack Developer & BCA&nbsp;Student
        </MotionH2>

        <MotionP
          variants={itemVariants}
          className="mb-8 max-w-3xl text-base leading-8 text-gray-300 md:text-lg"
        >
          I build modern websites, scalable Django backends, and polished full-stack products for
          businesses that need fast, reliable, and user-friendly digital experiences.
        </MotionP>

        <MotionDiv variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
          </span>
          <MapPin size={16} className="text-purple-300" />
          <span className="text-sm font-medium text-gray-300 tracking-wide">Kannur, Kerala</span>
        </MotionDiv>

        <MotionDiv variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <a
            href="#projects"
            className="group relative flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold w-full sm:w-auto overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            {/* Hover sheen effect */}
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-black/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
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
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20" />
            <div className="absolute -inset-0.5 -z-10 rounded-full opacity-0 group-hover:opacity-100 blur-md bg-linear-to-r from-purple-500 via-indigo-500 to-purple-500 transition-opacity duration-500" />

            <Mail size={20} className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300" />
            <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">Get in Touch</span>
          </a>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default Hero;
