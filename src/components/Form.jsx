import React from "react";

const Form = () => {
  return (
    <section className="max-w-md mx-auto my-10 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-purple-800 mb-4 text-center">
        Contáctame
      </h2>
      <form className="space-y-4">
        {/* Campo de nombre o correo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            placeholder="tucorreo@ejemplo.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Campo de mensaje */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje
          </label>
          <textarea
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-purple-800 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Form;
