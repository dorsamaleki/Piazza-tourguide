import React from "react";
import styles from "./Navbar.module.css";
import usericon from "./usericon.png";
import foldericon from "./foldericon.png";
import { NavLink } from "react-router-dom";
import piazzalogo from "./piazzalogo.png";
export const Navbar = (props) => {
  return (
    <div>
      <div className={styles.navbar1}>
        <img src={piazzalogo} alt="piazza logo" className={styles.piazzalogo} />
        <div className={styles.titlebox}>
          <div className={styles.title}>CS 154</div>
          <NavLink to="/" className={styles.title} id="tour8">
            Home
          </NavLink>
          <NavLink to="/statistics" className={styles.title} id="tour10">
            Statistics
          </NavLink>
          <div className={styles.title}>Resources</div>
          <img src={usericon} alt="user icon" className={styles.usericon} />
          <div onClick={props.onIconPress} className={styles.helpIcon}>
            HELP
          </div>
        </div>
      </div>
      <div className={styles.navbar2}>
        <img src={foldericon} alt="folder icon" />
        <img src={foldericon} alt="folder icon" />
        <img src={foldericon} alt="folder icon" />
        <img src={foldericon} alt="folder icon" />
        <img src={foldericon} alt="folder icon" />
        <img src={foldericon} alt="folder icon" />
        <img src={foldericon} alt="folder icon" />
      </div>
    </div>
  );
};
