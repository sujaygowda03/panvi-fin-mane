import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/917619463388"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl text-3xl z-50 transition"
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWhatsapp;