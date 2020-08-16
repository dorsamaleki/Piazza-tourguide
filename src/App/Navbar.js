import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import piazzalogo from "../icon/piazzalogo.png";
import usericon from "../icon/usericon.png";
import foldericon from "../icon/foldericon.png";

export const Navbar = (props) => {
  return (
    <div>
      <div className={styles.navbar1}>
        <img src={piazzalogo} alt="piazza logo" className={styles.piazzalogo} />
        <div className={styles.titlebox}>
          <div className={styles.title}>CS 154</div>
          <NavLink
            to="/"
            className={styles.title}
            id="tour5"
            onClick={props.onHomeClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={styles.title}
            id="tour7"
            onClick={props.onStatisticsClick}
          >
            Statistics
          </NavLink>
          <div className={styles.title}>Resources</div>
          <img src={usericon} alt="user icon" className={styles.usericon} />
          <div onClick={props.onIconPress} className={styles.helpIcon}>
            START TOUR
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
