import React from "react";
import styles from "./page.module.scss";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <h1 className={styles.next}>Hello, Next.js!</h1>
    </div>
  );
}
