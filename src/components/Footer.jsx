import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Footer = () => {

  const [esVisible, setVisible] = useState(false);

  // Controla el comportamiento del scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Añade el evento al navegador
    window.addEventListener("scroll", toggleVisibility);

    // Limpia el evento cuando el componente se desmonta
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-purple-800">
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-xl hover:bg-purple-700 cursor-pointer transition-all duration-300 md:hover:-translate-y-1 ${esVisible
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-75 pointer-events-none"
          }`}
        aria-label="Volver arriba"
      >
        <svg
          xmlns="http://w3.org"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Footer;
