import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import styles from "./LinkedIn.module.scss";

type LinkedInProps = {
  name: string;
  url: string;
};

function LinkedIn({ name, url }: LinkedInProps) {
  return (
    <Link className={styles.button} href={url} target="_blank">
      {name}
      <FaLinkedin color="black" />
    </Link>
  );
}

export default LinkedIn;
