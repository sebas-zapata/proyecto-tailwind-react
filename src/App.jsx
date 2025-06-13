import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Recommendations from "./components/Recommendations";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Navbar nombre="Sebastian Zapata" correo="zapatajuan351@gmail.com" telefono="+57 3225550261" />
      </header>
      <main>
        <Hero
          nombre="Sebastian Zapata"
          descripcion="Soy un desarrollador web con sólidos conocimientos en HTML, CSS,
            JavaScript, y experiencia construyendo interfaces modernas con React
            y Tailwind CSS. Me apasiona crear sitios web responsivos, limpios y
            funcionales, enfocados en la experiencia del usuario y buenas
            prácticas de desarrollo."
        />
        <Skills />
        <Projects />
        <Recommendations />
        <Form />
        <Footer />
      </main>
    </>
  );
}

export default App;
