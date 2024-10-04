import React from "react";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import OthersSkills from "./OtherSkills";
import styles from "./Skills.module.scss";
import Image from "next/image";

function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <Image
          className={styles.speechBubble}
          src={"/speech_bubble3.svg"}
          alt="Speech bubble 3"
          width={100}
          height={50}
        />
        <div className={styles.text}>Here are my skills</div>
      </div>
      <div className={styles.boxes}>
        <OthersSkills />
        <FrontendSkills />
        <BackendSkills />
      </div>
    </div>
  );
}

export default Skills;
