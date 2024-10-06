"use client";

import React, { forwardRef } from "react";
import Project from "./Project";
import styles from "./Projects.module.scss";

type ProjectsProps = {
  scrollingHandler: () => void;
};

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(
  ({ scrollingHandler }, ref) => {
    return (
      <div className={styles.container} ref={ref}>
        <Project
          name="Online Class Management System"
          img="/management_system.png"
          url="https://aaasobo-management-system-frontend.vercel.app/customers/login"
        />
        <Project name="Weather application" img="" url="" />
        <button className={styles.scrolling} onClick={scrollingHandler}>
          ▲
        </button>
      </div>
    );
  }
);

export default Projects;
