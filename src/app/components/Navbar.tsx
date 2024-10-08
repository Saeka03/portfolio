"use client";

import React, { useState } from "react";
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
  const [isActive, setIsActive] = useState<boolean>(false);
  const hamburgerHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.container}>
      <Hamburger isActive={isActive} hamburgerHandler={hamburgerHandler} />
      <NavButton
        name={"HOME"}
        icon={SlHome}
        onClick={scrollingToHome}
        isActive={isActive}
      />
      <NavButton
        name={"ABOUT ME"}
        icon={HiOutlineUser}
        onClick={scrollingToAboutMe}
        isActive={isActive}
      />
      <NavButton
        name={"SKILLS"}
        icon={GoGear}
        onClick={scrollingToSkills}
        isActive={isActive}
      />
      <NavButton
        name={"PROJECTS"}
        icon={IoDocumentTextOutline}
        onClick={scrollingToProjects}
        isActive={isActive}
      />
    </div>
  );
}

export default Navbar;
