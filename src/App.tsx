import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#0f0f11] text-white font-sans scroll-smooth overflow-x-hidden">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;