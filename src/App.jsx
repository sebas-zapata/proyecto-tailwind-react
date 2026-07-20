import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import "./App.css";

import { MdWork } from "react-icons/md";
import { FaTools } from "react-icons/fa";


function App() {
  return (
    <>
      <header>
        <Navbar nombre="Remote Code" />
      </header>
      <main>
        <Hero
          nombre="Remote Code"
          descripcion="Desarrollo de software a la medida para negocios. Transformamos necesidades complejas en aplicaciones web eficientes, escalables y diseñadas para optimizar sus procesos de negocio."
        />
        <section>
          <div id="habilidades" className="container-400 m-auto  px-1 py-1 flex justify-center">
            < FaTools className="text-white m-2 text-2xl" /> <h1 className="text-3xl text-center font-bold text-white"> Habilidades</h1>
          </div>

          {/* Contenedor principal de las tarjetas */}
          <div className="container mb-5 m-auto flex flex-wrap flex-col lg:flex-row justify-evenly items-center gap-4 p-3">

            <SkillCard
              title="HTML & CSS"
              description="Dominio de estructuras HTML semánticas y diseño con CSS moderno y responsive."
            />

            <SkillCard
              title="JavaScript"
              description="Manejo de lógica, eventos y manipulación del DOM para crear interfaces dinámicas."
            />

            <SkillCard
              title="React"
              description="Creación de componentes reutilizables y manejo de estado para SPA modernas."
            />

            <SkillCard
              title="Angular"
              description="Creación de aplicaciones robustas y interfaces de usuario dinamicas."
            />

            <SkillCard
              title="Tailwind CSS"
              description="Maquetación rápida, limpia y responsiva usando clases utilitarias."
            />

            <SkillCard
              title="Bootstrap CSS"
              description="Creación de interfaces de usuario adaptables mediante el uso de grillas, componentes preestablecidos y diseño responsivo ágil."
            />

            <SkillCard
              title="NodeJS y Express"
              description="Desarrollo de APIs REST robustas y escalables para conectar aplicaciones con bases de datos de forma segura."
            />

            <SkillCard
              title="PHP y Laravel"
              description="Creación de aplicaciones web robustas aplicando arquitectura MVC, enrutamiento avanzado, ORM Eloquent y desarrollo eficiente de APIs RESTful."
            />

            <SkillCard
              title="MySQL y MongoDB"
              description="Diseño y optimización de bases de datos relacionales y NoSQL, garantizando la integridad, velocidad y seguridad de los datos."
            />

          </div>
        </section>


        <section>
          <div id="proyectos" className="container-400 m-auto flex justify-center px-1 py-1">
            < MdWork className="m-2 text-2xl text-white" />
            <h1 className="text-3xl font-bold text-center text-white mb-3">Proyectos</h1>
          </div>
          <div className="p-3 flex justify-center flex-wrap gap-9">
            <ProjectCard
              title="SISADMEDU"
              description="Sistema integral en la nube que centraliza la administración, control de notas y comunicación para centros educativos."
              technologies="PHP y MySQL • Bootstrap • Docker • Aiven"
              link="https://sisadmedu.onrender.com/sisadmedu"
            />

            <ProjectCard
              title="Deliciosas Hamburguesas"
              description="Catálogo digital e interactivo de alto impacto visual, diseñado exclusivamente para la exhibición y presentación atractiva del menú de hamburguesas."
              technologies="HTML y CSS • JavaScript Nativo"
              link="https://deliciosashamburguesas.netlify.app"
            />

            <ProjectCard
              title="ZetaPos"
              description="Sistema web de gestión comercial diseñado para centralizar el control de ventas, flujos de caja (ingresos y egresos) y facturación automatizada con exportación a PDF."
              technologies="JavaScript Nativo • Bootstrap"
              link="https://sistema-de-compras-snowy.vercel.app"
            />

          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
