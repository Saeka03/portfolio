"use client";

import Image from "next/image";
import React from "react";
import styles from "./BackendSkills.module.scss";
import { motion } from "framer-motion";

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
      <motion.img
        className={styles.nodejs}
        whileInView={{ translateY: 200, translateX: 10, rotate: 60 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        src={"nodejs.svg"}
        alt="Node.js"
        width={50}
        height={50}
      />
      <motion.img
        className={styles.postgresql}
        whileInView={{ translateY: 200, rotate: -30 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        src={"postgresql.svg"}
        alt="PostgreSQL"
        width={50}
        height={50}
      />
      <motion.img
        className={styles.prisma}
        whileInView={{ translateY: 200, translateX: 30, rotate: 90 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        src={"prisma.svg"}
        alt="Prisma"
        width={50}
        height={50}
      />
    </div>
  );
}

export default BackendSkills;
