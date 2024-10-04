import Image from "next/image";
import React from "react";
import styles from "./FrontendSkills.module.scss";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";

function FrontendSkills() {
  return (
    <div>
      <Image
        className={styles.img}
        src={"/box2.svg"}
        alt="Box2"
        width={100}
        height={100}
      />
      <FaReact  size={50}/>
      <RiNextjsFill  size={50}/>
      <FaSass  size={50}/>
    </div>
  );
}

export default FrontendSkills;
