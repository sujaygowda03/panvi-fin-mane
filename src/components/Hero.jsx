import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function Hero() {
  // Stagger variants for smooth content entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#07111F] pt-32 lg:pt-20"
    >
      {/* Background Graphic Architecture */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        {/* Deep emerald blur layer representing liquidity/wealth */}
        <div className="absolute w-[600px] h-[600px] bg-[#2E8B57]/20 blur-[150px] rounded-full -top-40 -left-40 mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        {/* Signature corporate gold glow */}
        <div className="absolute w-[600px] h-[600px] bg-[#C89B3C]/15 blur-[150px] rounded-full bottom-[-100px] right-[-100px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
        {/* Subtle geometric grid line pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-16 lg:gap-8 items-center py-12">
        
        {/* Left Column - Content Engine (7 Cols) */}
        <motion.div
          className="lg:col-span-7 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C89B3C] animate-ping" />
            <span className="text-[#C89B3C] text-xs font-bold uppercase tracking-widest">
              Trusted Financial Growth Partner
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-[1.1] text-white tracking-tight"
          >
            Smart Loans, <br />
            <span className="bg-gradient-to-r from-[#C89B3C] via-amber-200 to-[#C89B3C] bg-clip-text text-transparent">
              Investments
            </span>{" "}
            & Property
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl font-normal"
          >
            Helping individuals and corporate entities engineer predictable financial scaling 
            through expert credit procurement, structured wealth planning, and cross-category asset advisory.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
            {/* Main Conversion CTA */}
            <a
              href="https://wa.me/917892805183?text=Hello%20Panvi%20Fin%20Mane,%20I%20need%20assistance%20for%20a%20loan."
              target="_blank"
              rel="noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#C89B3C] to-amber-500 text-[#07111F] font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#C89B3C]/20 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
            >
              <span className="relative z-10">Apply For Loan</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            {/* Secondary Soft CTA */}
            <a
              href="#contact"
              className="px-8 py-4 border border-white/10 bg-white/5 hover:bg-white hover:text-[#07111F] text-white font-bold rounded-full transition-all duration-300 backdrop-blur-md hover:border-white"
            >
              Get Consultation
            </a>
          </motion.div>
          
          {/* Subtle Inline Trust Badges */}
          <motion.div variants={itemVariants} className="pt-6 grid grid-cols-3 gap-4 border-t border-white/5 max-w-lg text-gray-400 text-xs">
            <div>
              <p className="text-white font-bold text-sm">₹250Cr+</p>
              <p>Disbursed Portfolios</p>
            </div>
            <div>
              <p className="text-white font-bold text-sm">100%</p>
              <p>Khata Transparency</p>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Karnataka Bank</p>
              <p>Allied Mutual Advisory</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Brand Showcase Card (5 Cols) */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <div className="relative group w-full max-w-[400px]">
            {/* Outer dynamic ambient glowing background frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C89B3C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] blur-xl" />
            
            {/* Core Brand Card Container */}
            <div className="relative w-full bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl overflow-hidden flex items-center justify-center min-h-[340px]">
              
              {/* Decorative radial gradient behind the logo to make it pop */}
              <div className="absolute w-48 h-48 bg-white/5 rounded-full blur-xl pointer-events-none" />

              <img
                src={logo}
                alt="Panvi Fin Mane Corporate Mark"
                className="w-full h-auto max-w-[240px] sm:max-w-[260px] object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
              />

              {/* Float Accent Tag - Top Right */}
              <div className="absolute top-4 right-4 bg-white/5 border border-white/10 text-[10px] tracking-widest font-black uppercase text-[#C89B3C] px-3 py-1 rounded-full backdrop-blur-md">
                Est. 2011
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

export default Hero;