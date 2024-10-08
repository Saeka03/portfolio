"use client";

import React, { useState } from "react";
import styles from "./NavButton.module.scss";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

type NavButtonProps = {
  name: string;
  icon: IconType;
  onClick: () => void;
  isActive: boolean;
};

function NavButton({ name, icon: Icon, onClick, isActive }: NavButtonProps) {
  const menuVariants = {
    closed: { opacity: 0, height: 0, display: "none" },
    open: { opacity: 1, height: "auto", display: "block" },
  };

  const [hovered, setHovered] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    setHovered(name);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <>
      <div className={styles.buttonContainer}>
        <button
          className={styles.navButton}
          onMouseEnter={() => handleMouseEnter(name)}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
        >
          <Icon size={40} />
          <div
            className={`${styles.text} ${
              hovered === name ? styles.showText : ""
            }`}
          >
            {name}
          </div>
        </button>
        <div
          className={`${styles.underLine} ${
            hovered === name ? styles.showUnderLine : ""
          }`}
        ></div>
      </div>
      {isActive ? (
        <motion.div
          className={`${styles.menu} ${isActive ? styles.activeMenu : ""}`}
          onClick={onClick}
          initial="closed"
          animate={isActive ? "open" : "closed"}
          variants={menuVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          {name}
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
}

export default NavButton;
