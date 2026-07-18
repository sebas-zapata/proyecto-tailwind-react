import React from "react";
import logo from "../assets/logoHero.jpeg";

const Hero = ({ nombre, descripcion }) => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={logo}  
            alt="Logo"
            className="rounded-full w-80 h-80 object-cover border-8 border-purple-500"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Hola, somos {nombre}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{descripcion}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
