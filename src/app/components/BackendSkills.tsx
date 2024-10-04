import Image from "next/image";
import React from "react";
import styles from "./BackendSkills.module.scss";
import { FaNodeJs } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { SiPrisma } from "react-icons/si";

function BackendSkills() {
  return (
    <div>
      <Image
        className={styles.img}
        src={"/box3.svg"}
        alt="Box3"
        width={100}
        height={100}
      />
      <FaNodeJs size={50} />
      <DiPostgresql size={50} />
      <SiPrisma size={50} />
    </div>
  );
}

export default BackendSkills;
