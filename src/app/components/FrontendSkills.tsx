"use client";

import Image from "next/image";
import styles from "./FrontendSkills.module.scss";
import { motion } from "framer-motion";

function FrontendSkills() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src={"/box2.png"}
        alt="Box2"
        width={100}
        height={100}
      />
      <motion.img
        initial={{ scale: 0.3, x: 0, y: 0 }}
        animate={{ scale: 1.3, x: 160, y: -400 }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className={`${styles.icon} ${styles.react}`}
        src={"react.svg"}
        alt="React"
        width={50}
        height={50}
      ></motion.img>
      <motion.img
        initial={{ scale: 0.3, x: 0, y: 0 }}
        animate={{ scale: 1.3, x: 230, y: -300 }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className={`${styles.icon} ${styles.nextjs}`}
        src={"nextjs.svg"}
        alt="Next.js"
        width={50}
        height={50}
      ></motion.img>
      <motion.img
        initial={{ scale: 0.3, x: 0, y: 0 }}
        animate={{ scale: 1.3, x: 280, y: -200 }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className={`${styles.icon} ${styles.sass}`}
        src={"sass.svg"}
        alt="SASS"
        width={50}
        height={50}
      ></motion.img>
    </div>
  );
}

export default FrontendSkills;
