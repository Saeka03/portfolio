"use client";

import React from "react";
import styles from "./Navbar.module.scss";
import NavButton from "./NavButton";
import { SlHome } from "react-icons/sl";
import { HiOutlineUser } from "react-icons/hi2";
import { GoGear } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import Hamburger from "./Hamburger";

type NavbarProps = {
  scrollingToHome: () => void;
  scrollingToAboutMe: () => void;
  scrollingToSkills: () => void;
  scrollingToProjects: () => void;
};

function Navbar({
  scrollingToHome,
  scrollingToAboutMe,
  scrollingToSkills,
  scrollingToProjects,
}: NavbarProps) {
  return (
    <div className={styles.container}>
      <Hamburger />
      <NavButton name={"HOME"} icon={SlHome} onClick={scrollingToHome} />
      <NavButton
        name={"ABOUT ME"}
        icon={HiOutlineUser}
        onClick={scrollingToAboutMe}
      />
      <NavButton name={"SKILLS"} icon={GoGear} onClick={scrollingToSkills} />
      <NavButton
        name={"PROJECTS"}
        icon={IoDocumentTextOutline}
        onClick={scrollingToProjects}
      />
    </div>
  );
}

export default Navbar;
