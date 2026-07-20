import React from "react";
import logo from "../assets/logoHero.jpeg";
import { FaHandPeace } from "react-icons/fa";

const Hero = ({ nombre, descripcion }) => {
  return (
    <section id="sobre-nosotros" className="py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-60 h-60 object-cover rounded-full border-2 border-purple-800 transition-all duration-300 ease-in-out hover:translate-y-2 hover:scale-110 hover:shadow-[0_10px_20px_rgba(107,33,168,0.4)]"
          />

        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl flex items-center font-bold justify-center md:text-3xl lg:text-4xl md:justify-start text-white mb-4">
            < FaHandPeace className=" me-2" /> Somos {nombre}
          </h1>
          <p className="text-lg text-white font-medium mb-6">{descripcion}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
