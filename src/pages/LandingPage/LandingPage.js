import React from "react";
import Articles from "./containers/Articles/Articles";
import Projects from "./containers/Projects/Projects";
import About from "./containers/About/About";

export default function LandingPage() {
  return (
    <>
      <About id="about" className="element" />
      {/* <Projects id="projects" className="element" />
      <Articles id="articles" className="element" /> */}
    </>
  );
}
