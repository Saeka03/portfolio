"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./NavButton.module.scss";
import { IconType } from "react-icons";

type NavButtonProps = {
  name: string;
  icon: IconType;
};

function NavButton({ name, icon: Icon }: NavButtonProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    setHovered(name);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.navButton}
        onMouseEnter={() => handleMouseEnter(name)}
        onMouseLeave={handleMouseLeave}
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
  );
}

export default NavButton;
