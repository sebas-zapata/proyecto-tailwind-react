import { useState } from "react";

const Navbar = ({ nombre, correo, telefono }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-800 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl text-white">
              {nombre}
            </a>
            <h3 className="text-white">{correo}</h3>
            <h6 className="text-white">{telefono}</h6>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="p-2 text-white hover:bg-white hover:text-purple-800 hover:rounded"
            >
              Sobre Mi
            </a>
            <a
              href="#"
              className="p-2 text-white hover:bg-white hover:text-purple-800 hover:rounded"
            >
              Habilidades
            </a>
            <a
              href="#"
              className="p-2 text-white hover:bg-white hover:text-purple-800 hover:rounded"
            >
              Proyectos
            </a>
            <a
              href="#"
              className="p-2 text-white hover:bg-white hover:text-purple-800 hover:rounded"
            >
              Recomendaciones
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-7 py-6 pb-4 space-y-2">
          <a
            href="#"
            className="block p-2 text-center text-white hover:bg-white hover:text-purple-800 hover:rounded"
          >
            Inicio
          </a>
          <a
            href="#"
            className="block p-2 text-center text-white hover:bg-white hover:text-purple-800 hover:rounded"
          >
            Blog
          </a>
          <a
            href="#"
            className="block p-2 text-center text-white hover:bg-white hover:text-purple-800 hover:rounded"
          >
            Sobre mí
          </a>
          <a
            href="#"
            className="block p-2 text-center text-white hover:bg-white hover:text-purple-800 hover:rounded"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
