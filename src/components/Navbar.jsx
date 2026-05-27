import React, { useState } from "react";
import {
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo1.png";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src={logo} alt="Panvi Fin Mane"
            className="h-16 sm:h-20 object-contain hover:scale-105 transition duration-300"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 font-medium text-[#0B1F3A]">

          <a href="#home" className="hover:text-[#C89B3C] transition">
            Home
          </a>

          <a href="#services" className="hover:text-[#C89B3C] transition">
            Services
          </a>

          <a href="#founder" className="hover:text-[#C89B3C] transition">
            About
          </a>

          <a href="#calculator" className="hover:text-[#C89B3C] transition">
            EMI Calculator
          </a>

          <a href="#faq" className="hover:text-[#C89B3C] transition">
            FAQ
          </a>

          <a href="#contact" className="hover:text-[#C89B3C] transition">
            Contact
          </a>
        </ul>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917892805183?text=Hello%20Panvi%20Fin%20Mane,%20I%20need%20assistance%20for%20a%20loan."
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-3 bg-[#25D366] hover:bg-green-600 text-white px-6 py-3 rounded-full transition shadow-lg"
        >
          <FaWhatsapp />
          WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#0B1F3A]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6">

          <div className="flex flex-col gap-6 text-[#0B1F3A] font-medium">

            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#calculator" onClick={closeMenu}>
              EMI Calculator
            </a>

            <a href="#faq" onClick={closeMenu}>
              FAQ
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <a
              href="https://wa.me/917892805183?text=Hello%20Panvi%20Fin%20Mane,%20I%20need%20assistance%20for%20a%20loan."
              className="bg-[#25D366] text-white py-3 rounded-full text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;