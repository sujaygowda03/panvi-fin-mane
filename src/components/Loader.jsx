import React from "react";
import logo from "../assets/logo1.png";

function Loader() {
  return (
    <div className="fixed inset-0 bg-[#07111F] flex items-center justify-center z-[9999]">
      
      <div className="animate-pulse">
        <img
          src={logo}
          alt="Panvi Fin Mane"
          className="w-56 object-contain"
        />
      </div>
    </div>
  );
}

export default Loader;