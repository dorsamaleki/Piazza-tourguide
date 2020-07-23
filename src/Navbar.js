import React from "react";

import styles from "./Navbar.module.css";
import usericon from "./usericon.png";
import foldericon from "./foldericon.png";

export const Navbar = (props) => {
  return (
    <div id="side6">
      <div className={styles.navbar1}>
        <img src={usericon} alt="user icon" className={styles.usericon} />

        <div onClick={props.onIconPress} className={styles.helpIcon}>
          HELP
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIjpX9iO2q9K3wV5KcZ0_p9jRtaiCD-A5fNw&usqp=CAU"
          alt="piazza logo"
          className={styles.img2}
        />
      </div>
      <div className={styles.navbar2}>
        <img src={foldericon} alt="logo" />
        <img src={foldericon} alt="logo" />
        <img src={foldericon} alt="logo" />
        <img src={foldericon} alt="logo" />
        <img src={foldericon} alt="logo" />
        <img src={foldericon} alt="logo" />
        <img src={foldericon} alt="logo" />
      </div>
    </div>
  );
};
