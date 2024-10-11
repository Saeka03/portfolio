import Image from "next/image";
import React from "react";
import styles from "./Contact.module.scss";
import LinkedIn from "./LinkedIn";
import Github from "./Github";
import { FaMousePointer } from "react-icons/fa";

function Contact() {
  return (
    <div className={styles.contact}>
      <Image
        className={styles.img}
        src={"/laptop.png"}
        alt="laptop"
        width={225}
        height={225}
      />
      <LinkedIn
        name="Linked"
        url="https://www.linkedin.com/in/saeka-k-6678a128a"
      />
      <Github name="Github" url="https://github.com/Saeka03" />
      <FaMousePointer className={styles.mouse} />
    </div>
  );
}

export default Contact;
