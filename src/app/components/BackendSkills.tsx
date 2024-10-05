import Image from "next/image";
import React from "react";
import styles from "./BackendSkills.module.scss";

function BackendSkills() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src={"/box1.png"}
        alt="Box1"
        width={100}
        height={100}
      />
      <Image
        className={styles.icon}
        src={"nodejs.svg"}
        alt="Node.js"
        width={50}
        height={50}
      />
      <Image
        className={styles.icon}
        src={"postgresql.svg"}
        alt="PostgreSQL"
        width={50}
        height={50}
      />
      <Image
        className={styles.icon}
        src={"prisma.svg"}
        alt="Prisma"
        width={50}
        height={50}
      />
    </div>
  );
}

export default BackendSkills;
