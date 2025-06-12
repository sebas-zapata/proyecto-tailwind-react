import React from "react";

const Projects = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-purple-800 mb-10">
        Proyectos
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Proyecto 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:scale-105 hover:shadow-xl duration-300 w-full sm:w-80">
          <h3 className="text-xl font-bold text-purple-700 mb-2">
            Landing Page Personal
          </h3>
          <p className="text-gray-600 mb-3">
            Página web responsiva para presentar información personal y profesional.
          </p>
          <span className="text-sm text-gray-500">React • Tailwind CSS</span>
        </div>

        {/* Proyecto 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:scale-105 hover:shadow-xl duration-300 w-full sm:w-80">
          <h3 className="text-xl font-bold text-purple-800 mb-2">
            Dashboard Administrativo
          </h3>
          <p className="text-gray-600 mb-3">
            Aplicación para gestionar usuarios, roles y estadísticas del sistema.
          </p>
          <span className="text-sm text-gray-500">
            React • Tailwind • Context API
          </span>
        </div>

        {/* Proyecto 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:scale-105 hover:shadow-xl duration-300 w-full sm:w-80">
          <h3 className="text-xl font-bold text-purple-800 mb-2">
            Buscador de Películas
          </h3>
          <p className="text-gray-600 mb-3">
            App para buscar películas utilizando una API externa, con manejo de estados.
          </p>
          <span className="text-sm text-gray-500">
            React • Tailwind • Fetch API
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;

