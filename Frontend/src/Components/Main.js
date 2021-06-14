import React from "react";
import Homepage from "./Homepage";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Awards from "./Awards";
import Contact from "./Contact";

const Main = () => {
  return (
    <div className="content">
      <Homepage />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Awards />
      <Education />
      <Contact />
    </div>
  );
};

export default Main;
