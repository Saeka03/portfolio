import React from "react";
import styles from "./AboutMe.module.scss";
import FindMe from "./FindMe";
import Contact from "./Contact";

function AboutMe() {
  return (
    <div className={styles.container}>
      <FindMe />
      <Contact />
    </div>
  );
}

export default AboutMe;
