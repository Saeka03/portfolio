import Image from "next/image";
import React from "react";
import styles from "./OtherSkills.module.scss";

function OtherSkills() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src={"/box3.png"}
        alt="Box3"
        width={100}
        height={100}
      />
      <Image
        className={styles.icon}
        src={"js.svg"}
        alt="JS"
        width={50}
        height={50}
      />
      <Image
        className={styles.icon}
        src={"ts.svg"}
        alt="TS"
        width={50}
        height={50}
      />
    </div>
  );
}

export default OtherSkills;
