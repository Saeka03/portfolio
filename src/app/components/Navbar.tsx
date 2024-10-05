"use client";

import React from "react";
import styles from "./Navbar.module.scss";
import NavButton from "./NavButton";
import { SlHome } from "react-icons/sl";
import { HiOutlineUser } from "react-icons/hi2";
import { GoGear } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className={styles.container}>
      <NavButton name={"HOME"} icon={SlHome} />
      <NavButton name={"ABOUT ME"} icon={HiOutlineUser} />
      <NavButton name={"SKILLS"} icon={GoGear} />
      <NavButton name={"PROJECTS"} icon={IoDocumentTextOutline} />
    </div>
  );
}

export default Navbar;
