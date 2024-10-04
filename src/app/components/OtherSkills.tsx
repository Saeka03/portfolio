import Image from "next/image";
import React from "react";
import styles from "./OtherSkills.module.scss";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

function OtherSkills() {
  return (
    <div>
      <Image
        className={styles.img}
        src={"/box1.svg"}
        alt="Box1"
        width={100}
        height={100}
      />
      <SiJavascript size={50} />
      <SiTypescript size={50} />
    </div>
  );
}

export default OtherSkills;
