import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Recommendations from "./components/Recommendations";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Recommendations />
        <Form />
      </main>
    </>
  );
}

export default App;
