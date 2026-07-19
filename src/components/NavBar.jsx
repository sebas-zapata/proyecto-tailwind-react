import { LuCodesandbox } from "react-icons/lu";
import { FaTools } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FaHandPeace } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ nombre, correo, telefono }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-800 shadow-lg py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            < LuCodesandbox className="me-1 text-2xl text-white font-bold" />
            <a href="/" className="text-xl font-bold text-white">
              {nombre}
            </a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#sobre-nosotros"
              className="p-2 text-white flex hover:bg-white hover:text-purple-800 hover:rounded"
            >
              < RiTeamFill className="m-1" />
              Sobre Nosotros
            </a>
            <a
              href="#habilidades"
              className="p-2 text-white flex hover:bg-white hover:text-purple-800 hover:rounded"
            >
              < FaTools className="m-1" />
              Habilidades
            </a>
            <a
              href="#proyectos"
              className="p-2 text-white flex hover:bg-white hover:text-purple-800 hover:rounded"
            >
              < MdWork className="m-1" />
              Proyectos
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-3 rounded-lg focus:outline-none cursor-pointer hover:bg-white hover:text-purple-800"
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
            className="p-2 flex justify-center text-white hover:bg-white hover:text-purple-800 hover:rounded"
          >
            < RiTeamFill className="m-1" />

            Sobre Nosotros
          </a>
          <a
            href="#"
            className="p-2 flex justify-center text-white hover:bg-white hover:text-purple-800 hover:rounded"
          >
            < FaTools className="m-1" />

            Habilidades
          </a>
          <a
            href="#"
            className="p-2 flex justify-center text-white hover:bg-white hover:text-purple-800 hover:rounded"
          >
            < MdWork className="m-1" />
            Proyectos
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
