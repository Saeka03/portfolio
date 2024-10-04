import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from "./Github.module.scss";

type GithubProps = {
  name: string;
  url: string;
};

function Github({ name, url }: GithubProps) {
  return (
    <Link className={styles.button} href={url} target="_blank">
      <FaGithub color="black" />
      {name}
    </Link>
  );
}

export default Github;
