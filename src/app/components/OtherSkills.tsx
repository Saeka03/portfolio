"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./OtherSkills.module.scss";
import { motion } from "framer-motion";

function OtherSkills() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src={"/toy-box.png"}
        alt="Box3"
        width={100}
        height={100}
      />
      <motion.img
        className={styles.js}
        onMouseEnter={() => setHovered("js")}
        onMouseLeave={() => setHovered(null)}
        animate={hovered === "js" ? { rotate: 360 } : { rotate: 0 }}
        transition={{
          repeat: hovered === "js" ? Infinity : 0,
          duration: 1,
          ease: "linear",
        }}
        src={"js.svg"}
        alt="JS"
        width={50}
        height={50}
      />
      <motion.img
        className={styles.ts}
        onMouseEnter={() => setHovered("ts")}
        onMouseLeave={() => setHovered(null)}
        animate={hovered === "ts" ? { rotate: 360 } : { rotate: 0 }}
        transition={{
          repeat: hovered === "ts"  ? Infinity : 0,
          duration: 1,
          ease: "linear",
        }}
        src={"ts.svg"}
        alt="TS"
        width={50}
        height={50}
      />
    </div>
  );
}

export default OtherSkills;
