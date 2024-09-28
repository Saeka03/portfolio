"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./NavButton.module.scss";

type NavButtonProps = {
  img: string;
  alt: string;
  width: number;
  height: number;
  text: string;
};

function NavButton({ img, alt, width, height, text }: NavButtonProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleMouseEnter = (text: string) => {
    setHovered(text);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <button
      className={styles.navButton}
      onMouseEnter={() => handleMouseEnter(text)}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={img} alt={alt} width={width} height={height} />
      {hovered === text ? <div className={styles.text}>{text}</div> : ""}
    </button>
  );
}

type Props = {};

export default NavButton;
