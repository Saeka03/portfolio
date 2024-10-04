import React from "react";
import Project from "./Project";
import styles from "./Projects.module.scss";

function Projects() {
  return (
    <div className={styles.project}>
      <Project
        name="Online Class Management System"
        img="/management_system.png"
        url="https://aaasobo-management-system-frontend.vercel.app/customers/login"
      />
      <Project name="Weather application" img="" url="" />
    </div>
  );
}

export default Projects;
