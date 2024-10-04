import React from "react";
import styles from "./page.module.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <h1 className={styles.next}>Hello, Next.js!</h1>
    </div>
  );
}
