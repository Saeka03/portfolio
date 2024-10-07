"use client";

import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import styles from "./Hamburger.module.scss";

function Hamburger() {
  const [active, setActive] = useState<boolean>(false);

  return (
    <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
      <motion.button
        className={styles.button}
        onClick={() => setActive((pv) => !pv)}
        initial={false}
        animate={active ? "open" : "closed"}
      >
        <motion.span
          style={{
            top: "30%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className={styles.bar}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["30%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "30%"],
            },
          }}
        />
        <motion.span
          style={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className={styles.bar}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          style={{
            bottom: "30%",
            left: "calc(50% + 5px)",
            x: "-50%",
            y: "50%",
          }}
          className={`${styles.bottomBar} ${styles.bar}`}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              bottom: ["30%", "50%", "50%"],
              left: "50%",
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "30%"],
              left: "calc(50% + 5px)",
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}

export default Hamburger;
