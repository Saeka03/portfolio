import React from "react";
import styles from "./page.module.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
    </div>
  );
}
