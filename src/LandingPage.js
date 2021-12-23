import React from "react";
import Articles from "./Articles";
import Projects from "./Projects";
import About from "./About";

export default function LandingPage() {
  return (
    <>
      <About id="about" className="element" />
      <Projects id="projects" className="element" />
      <Articles id="articles" className="element" />
    </>
  );
}
