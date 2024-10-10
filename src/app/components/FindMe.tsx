import Image from "next/image";
import React from "react";
import styles from "./FindMe.module.scss";

function FindMe() {
  return (
    <div className={styles.line}>
      <Image
        className={styles.speechBubbleImg}
        src={"/speech_bubble2.png"}
        alt="Speech bubble 2"
        width={225}
        height={225}
      />
      <div className={styles.text}>
        I am a frontend web developer.
        <br /> Find me on!
      </div>
    </div>
  );
}

export default FindMe;
