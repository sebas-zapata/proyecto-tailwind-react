import React from "react";

const Projects = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-10">Proyectos</h1>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:scale-105 hover:shadow-xl duration-300 w-full sm:w-80">
          <h3 className="text-xl font-bold text-purple-700 mb-2">
            SISADMEDU | Software Academico
          </h3>
          <p className="text-gray-600 mb-3">
            Sistema integral en la nube que centraliza la administración, control de notas y comunicación para centros educativos de cualquier nivel.
          </p>
          <span className="text-sm text-gray-500">PHP y MySQL • Bootstrap • Docker • Aiven</span>
          <hr className="border-slate-800 my-6" />
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://sisadmedu.onrender.com/sisadmedu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium text-sm rounded-xl shadow-md shadow-blue-500/20 transform transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-0"
            >
              <span>Visitar SISADMEDU</span>
              {/* Icono de flecha externa */}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>
        <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:scale-105 hover:shadow-xl duration-300 w-full sm:w-80">
          <h3 className="text-xl font-bold text-purple-800 mb-2">
            Sitio Web | Deliciosas Hamburguesas
          </h3>
          <p className="text-gray-600 mb-3">
            Catálogo digital e interactivo de alto impacto visual, diseñado exclusivamente para la exhibición y presentación atractiva del menú de hamburguesas.
          </p>
          <span className="text-sm text-gray-500">
            HTML y CSS • JavaScript Nativo
          </span>
          <hr className="border-slate-800 my-6" />
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://deliciosashamburguesas.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium text-sm rounded-xl shadow-md shadow-blue-500/20 transform transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-0"
            >
              <span>Visitar Deliciosas Hamburguesas</span>
              {/* Icono de flecha externa */}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:scale-105 hover:shadow-xl duration-300 w-full sm:w-80">
          <h3 className="text-xl font-bold text-purple-800 mb-2">
            Sistema control de ventas | ZetaPos
          </h3>
          <p className="text-gray-600 mb-3">
            Sistema web de gestión comercial diseñado para centralizar el control de ventas, flujos de caja (ingresos y egresos) y facturación automatizada con exportación a PDF.
          </p>
          <span className="text-sm text-gray-500">
            JavaScript Nativo • Bootstrap
          </span>
          <hr className="border-slate-800 my-6" />
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://sistema-de-compras-snowy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium text-sm rounded-xl shadow-md shadow-blue-500/20 transform transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-0"
            >
              <span>Visitar Sistema ZetaPos</span>
              {/* Icono de flecha externa */}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
