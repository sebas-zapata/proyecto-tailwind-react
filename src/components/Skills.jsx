import React from "react";

const Skills = () => {
  return (
    <section>
      <div id="habilidades" className="container m-auto px-1 py-1">
        <h1 className="text-3xl text-center font-bold text-purple-800">Habilidades</h1>
      </div>
      <div className="container m-auto flex flex-wrap flex-col lg:flex-row justify-evenly items-center gap-4 p-3">
        <article className="bg-purple-800 p-6 rounded-2xl shadow-lg w-full lg:w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-bold text-white mb-2">HTML & CSS</h2>
          <p className="text-white mb-4">
            Dominio de estructuras HTML semánticas y diseño con CSS moderno y
            responsive.
          </p>
        </article>
        <article className="bg-purple-800 p-6 rounded-2xl shadow-lg w-full lg:w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-bold text-white mb-2">JavaScript</h2>
          <p className="text-white mb-4">
            Manejo de lógica, eventos y manipulación del DOM para crear
            interfaces dinámicas.
          </p>
        </article>
        <article className="bg-purple-800 p-6 rounded-2xl shadow-lg w-full lg:w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-bold text-white mb-2">React</h2>
          <p className="text-white mb-4">
            Creación de componentes reutilizables y manejo de estado para SPA
            modernas.
          </p>
        </article>
        <article className="bg-purple-800 p-6 rounded-2xl shadow-lg w-full lg:w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-bold text-white mb-2">Angular</h2>
          <p className="text-white mb-4">
            Creación de aplicaciones robustas y interfaces de usuario dinamicas.
          </p>
        </article>
        <article className="bg-purple-800 p-6 rounded-2xl shadow-lg w-full lg:w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-bold text-white mb-2">Tailwind CSS</h2>
          <p className="text-white mb-4">
            Maquetación rápida, limpia y responsiva usando clases utilitarias.
          </p>
        </article>
        <article className="bg-purple-800 p-6 rounded-2xl shadow-lg w-full lg:w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-bold text-white mb-2">Bootstrap CSS</h2>
          <p className="text-white mb-4">
            Creación de interfaces de usuario adaptables mediante el uso de grillas, componentes preestablecidos y diseño responsivo ágil.
          </p>
        </article>
        <article className="bg-purple-800 p-6 rounded-2xl shadow-lg w-full lg:w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-bold text-white mb-2">NodeJS y Express</h2>
          <p className="text-white mb-4">
            Desarrollo de APIs REST robustas y escalables para conectar aplicaciones con bases de datos de forma segura.
          </p>
        </article>
        <article className="bg-purple-800 p-6 rounded-2xl shadow-lg w-full lg:w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-bold text-white mb-2">PHP y Laravel</h2>
          <p className="text-white mb-4">
            Creación de aplicaciones web robustas aplicando arquitectura MVC, enrutamiento avanzado, ORM Eloquent y desarrollo eficiente de APIs RESTful.
          </p>
        </article>
        <article className="bg-purple-800 p-6 rounded-2xl shadow-lg w-full lg:w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-bold text-white mb-2">MySQL y MongoDB</h2>
          <p className="text-white mb-4">
            Diseño y optimización de bases de datos relacionales y NoSQL, garantizando la integridad, velocidad y seguridad de los datos.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Skills;
