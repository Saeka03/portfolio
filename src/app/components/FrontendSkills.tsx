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
      <motion.div
        initial={{ scale: 0, x: 0, y: 100 }}
        animate={{ scale: 1.3, x: 100, y: -200 }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <Image
          className={`${styles.icon} ${styles.react}`}
          src={"react.svg"}
          alt="React"
          width={50}
          height={50}
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0, x: 0, y: 100 }}
        animate={{ scale: 1.2, x: 200, y: -120 }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <Image
          className={`${styles.icon} ${styles.nextjs}`}
          src={"nextjs.svg"}
          alt="Next.js"
          width={50}
          height={50}
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0, x: 0, y: 100 }}
        animate={{ scale: 1.2, x: 300, y: -80 }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <Image
          className={`${styles.icon} ${styles.sass}`}
          src={"sass.svg"}
          alt="SASS"
          width={50}
          height={50}
        />
      </motion.div>
    </div>
  );
}

export default FrontendSkills;
