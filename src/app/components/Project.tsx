import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Project.module.scss";

type ProjectProps = {
  name: string;
  img: string;
  url: string;
};

function Project({ name, img, url }: ProjectProps) {
  return (
    <div className={styles.project}>
      <div className={styles.line}>
        <Image
          className={styles.speechBubble}
          src={"/speech_bubble4.png"}
          alt="Speech bubble4"
          width={100}
          height={50}
        />
        <div className={styles.text}>{name}</div>
      </div>
      {img !== "" || url !== "" ? (
        <Link href={url} target="_blank">
          <Image
            className={styles.img}
            src={img}
            alt={name}
            width={200}
            height={200}
          />
        </Link>
      ) : (
        <div>Coming soon</div>
      )}
    </div>
  );
}

export default Project;
