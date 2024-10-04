import Image from "next/image";
import React from "react";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.me}>
        <Image
          className={styles.myImg}
          src={"/me.svg"}
          alt={"My illust"}
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
  );
}

export default Home;
