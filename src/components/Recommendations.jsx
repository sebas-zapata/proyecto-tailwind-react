import React from "react";

const Recommendations = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-purple-800 mb-10">
        Recomendaciones
      </h2>

      <article className="flex flex-wrap justify-evenly gap-3">
        <div className="bg-white p-6 rounded-xl shadow-md w-full sm:w-80 transition-transform hover:bg-purple-300 hover:scale-105 duration-700">
          <p className="text-gray-700 mb-4">
            “Demostró gran dominio de React y Tailwind en cada proyecto. Es muy
            responsable y proactivo.”
          </p>
          <span className="text-sm text-purple-800 font-semibold">
            — Juan Pérez, Desarrollador Senior
          </span>
        </div>

        <article className="bg-white p-6 rounded-xl shadow-lg w-full sm:w-80 transition-transform hover:bg-purple-300 hover:scale-105 duration-300">
          <p className="text-gray-700 mb-4">
            “Trabajar con él fue un placer. Siempre aporta ideas claras y
            soluciones rápidas.”
          </p>
          <span className="text-sm text-purple-800 font-semibold">
            — Laura Gómez, Diseñadora UX
          </span>
        </article>

        <article className="bg-white p-6 rounded-xl shadow-md w-full sm:w-80 transition-transform hover:bg-purple-300 hover:scale-105 duration-300">
          <p className="text-gray-700 mb-4">
            “Tiene habilidades técnicas muy sólidas y una gran actitud para el
            trabajo en equipo.”
          </p>
          <span className="text-sm text-purple-800 font-semibold">
            — Carlos Rivas, Líder de Proyecto
          </span>
        </article>

        <article className="bg-white p-6 rounded-xl shadow-md w-full sm:w-80 transition-transform hover:bg-purple-300 hover:scale-105 duration-300">
          <p className="text-gray-700 mb-4">
            “Trabajar con él fue una experiencia excelente. Tiene mucha
            iniciativa, siempre busca mejorar el código y entregar soluciones
            limpias y eficientes.”
          </p>
          <span className="text-sm text-purple-800 font-semibold">
            — Equipo de Desarrollo - Proyecto ERP
          </span>
        </article>
      </article>
    </section>
  );
};

export default Recommendations;
