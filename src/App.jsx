import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

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
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
