import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";



function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[110vh] md:min-h-screen flex items-center overflow-hidden bg-[#07111F] pt-28 sm:pt-32"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute w-[500px] h-[500px] bg-[#2E8B57] blur-[140px] rounded-full top-[-100px] left-[-100px]"></div>

        <div className="absolute w-[500px] h-[500px] bg-[#C89B3C] blur-[140px] rounded-full bottom-[-100px] right-[-100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-[#C89B3C] font-semibold mb-5 tracking-wide uppercase">
            Trusted Financial Growth Partner
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-8">
            Smart Loans,
            <span className="text-[#C89B3C]"> Investments</span> &
            Property Solutions
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-10 max-w-xl">
            Helping individuals and businesses secure financial growth
            through trusted loan advisory, investment guidance,
            and property consultation services.
          </p>

          <div className="flex flex-wrap gap-5">

            {/* WhatsApp Loan CTA */}
            <a
              href="https://wa.me/917892805183?text=Hello%20Panvi%20Fin%20Mane,%20I%20need%20assistance%20for%20a%20loan."
              target="_blank"
              rel="noreferrer"
              className="bg-[#C89B3C] hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition shadow-xl"
            >
              Apply For Loan
            </a>

            {/* Contact Form Scroll */}
            <a
              href="#contact"
              className="border border-white/20 hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-semibold transition"
            >
              Get Consultation
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] shadow-2xl">

            <img
              src={logo}
              alt="Panvi Fin Mane"
              className="w-full max-w-[280px] sm:max-w-md object-contain mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;