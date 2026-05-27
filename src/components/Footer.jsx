import React from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../assets/logo.png";


function Footer() {
  return (
    <footer className="bg-[#07111F] border-t border-white/10 pt-24 pb-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="grid md:grid-cols-4 gap-14 mb-20">

          {/* Brand */}
          <div>

            <img
              src={logo}
              alt="Panvi Fin Mane"
              className="h-16 object-contain mb-6"
            />

            <p className="text-gray-400 leading-8">
              Professional financial advisory services
              for loans, investments, and property consultation.
            </p>
          </div>

          {/* Services */}
          <div>

            <h3 className="text-white text-2xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>Loan Advisory</li>
              <li>Investment Planning</li>
              <li>Property Consultation</li>
              <li>Mutual Funds</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-white text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#faq">FAQ</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-white text-2xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <a
                  href="tel:+917892805183"
                  className="hover:text-[#C89B3C] transition"
                >
                  +91 7892805183
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <a
                  href="mailto:support@panvifinmane.com"
                  className="hover:text-[#C89B3C] transition"
                >
                  support@panvifinmane.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp />
                <p>WhatsApp Support</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-8">

              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#C89B3C] hover:text-black transition cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#C89B3C] hover:text-black transition cursor-pointer">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-center">
            © 2026 Panvi Fin Mane. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-gray-500">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;