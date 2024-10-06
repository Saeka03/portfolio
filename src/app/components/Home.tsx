"use client";

import Image from "next/image";
import React, { useRef } from "react";
import styles from "./Home.module.scss";

function Home() {
  const nextSectionRef = useRef(null);
  const handleScroll = () => {
    // nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <div className={styles.me}>
          <Image
            className={styles.myImg}
            src={"/me.svg"}
            alt={"My illustration"}
            width={225}
            height={225}
          />
        </div>
        <div className={styles.line}>
          <Image
            className={styles.speechBubbleImg}
            src={"/speech_bubble1.svg"}
            alt={"Speech bubble 1"}
            width={225}
            height={225}
          />
          <div className={styles.text}>Hi, I am Saeka!</div>
        </div>
      </div>
      <button className={styles.scrolling}>▼</button>
    </div>
  );
}

export default Home;
