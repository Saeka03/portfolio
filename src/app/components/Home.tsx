"use client";

import Image from "next/image";
import React, { forwardRef } from "react";
import styles from "./Home.module.scss";

type HomeProps = {
  scrollingHandler: () => void;
};

const Home = forwardRef<HTMLDivElement, HomeProps>(
  ({ scrollingHandler }, ref) => {
    return (
      <div className={styles.container} ref={ref}>
        <div className={styles.home}>
          <div className={styles.me}>
            <Image
              className={styles.myImg}
              src={"/me.png"}
              alt={"My illustration"}
              width={225}
              height={225}
            />
          </div>
          <div className={styles.line}>
            <Image
              className={styles.speechBubbleImg}
              src={"/speech_bubble1.png"}
              alt={"Speech bubble 1"}
              width={225}
              height={225}
            />
            <div className={styles.text}>Hi, I am Saeka!</div>
          </div>
        </div>
        <button className={styles.scrolling} onClick={scrollingHandler}>
          ▼
        </button>
      </div>
    );
  }
);

export default Home;
