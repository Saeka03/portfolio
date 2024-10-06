"use client";

import React, { forwardRef } from "react";
import styles from "./AboutMe.module.scss";
import FindMe from "./FindMe";
import Contact from "./Contact";

type AboutMeProps = {
  scrollingHandler: () => void;
};

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>(
  ({ scrollingHandler }, ref) => {
    return (
      <div className={styles.container} ref={ref}>
        <FindMe />
        <Contact />
        <button className={styles.scrolling} onClick={scrollingHandler}>
          ▼
        </button>
      </div>
    );
  }
);

export default AboutMe;
