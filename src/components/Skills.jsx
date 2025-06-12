import React from "react";

const Skills = () => {
  return (
    <>
      <div className="container m-auto px-1 py-1">
        <h1 className="text-3xl font-bold text-purple-800">Habilidades</h1>
      </div>
      <div className="container m-auto flex flex-col lg:flex-row justify-between items-center gap-4 p-3">
        <article className="bg-purple-800 p-6 rounded-2xl shadow-lg w-full lg:w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-bold text-white mb-2">HTML & CSS</h2>
          <p className="text-white mb-4">
            Dominio de estructuras HTML semánticas y diseño con CSS moderno y
            responsive.
          </p>
          <button className="bg-white text-purple-800 px-4 py-2 rounded hover:bg-purple-400 hover:text-white transition">
            Ver más
          </button>
        </article>
        <article className="bg-purple-800 p-6 rounded-2xl shadow-lg w-full lg:w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-bold text-white mb-2">JavaScript</h2>
          <p className="text-white mb-4">
            Manejo de lógica, eventos y manipulación del DOM para crear
            interfaces dinámicas.
          </p>
          <button className="bg-white text-purple-800 px-4 py-2 rounded hover:bg-purple-400 hover:text-white transition">
            Ver más
          </button>
        </article>
        <article className="bg-purple-800 p-6 rounded-2xl shadow-lg w-full lg:w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-bold text-white mb-2">React</h2>
          <p className="text-white mb-4">
            Creación de componentes reutilizables y manejo de estado para SPA
            modernas.
          </p>
          <button className="bg-white text-purple-800 px-4 py-2 rounded hover:bg-purple-400 hover:text-white transition">
            Ver más
          </button>
        </article>
        <article className="bg-purple-800 p-6 rounded-2xl shadow-lg w-full lg:w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-bold text-white mb-2">Tailwind CSS</h2>
          <p className="text-white mb-4">
            Maquetación rápida, limpia y responsiva usando clases utilitarias.
          </p>
          <button className="bg-white text-purple-800 px-4 py-2 rounded hover:bg-purple-400 hover:text-white transition">
            Ver más
          </button>
        </article>
      </div>
    </>
  );
};

export default Skills;
