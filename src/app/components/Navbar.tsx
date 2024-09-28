import React from "react";
import styles from "./Navbar.module.scss";
import NavButton from "./NavButton";

function Navbar() {
  return (
    <div className={styles.container}>
      <NavButton
        img={"/icon_home.svg"}
        alt={"home"}
        width={50}
        height={50}
        text={"HOME"}
      />
      <NavButton
        img={"/icon_about_me.svg"}
        alt={"about me"}
        width={50}
        height={50}
        text={"ABOUT ME"}
      />
      <NavButton
        img={"/icon_skills.svg"}
        alt={"skills"}
        width={60}
        height={60}
        text={"SKILLS"}
      />
      <NavButton
        img={"/icon_projects.svg"}
        alt={"project"}
        width={45}
        height={45}
        text={"PROJECTS"}
      />
    </div>
  );
}

export default Navbar;
