import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollTop}
          className="fixed bottom-24 right-6 z-50 bg-[#C89B3C] hover:bg-yellow-600 text-black w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;