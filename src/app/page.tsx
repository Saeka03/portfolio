"use client";

import React, { RefObject, useRef } from "react";
import styles from "./page.module.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Page() {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const scrollingToSection = (sectionRef: RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={navbarRef}>
      <Navbar />
      <Home
        scrollingHandler={() => scrollingToSection(aboutMeRef)}
        ref={homeRef}
      />
      <AboutMe
        scrollingHandler={() => scrollingToSection(skillsRef)}
        ref={aboutMeRef}
      />
      <Skills
        scrollingHandler={() => scrollingToSection(projectsRef)}
        ref={skillsRef}
      />
      <Projects
        scrollingHandler={() => scrollingToSection(navbarRef)}
        ref={projectsRef}
      />
    </div>
  );
}
