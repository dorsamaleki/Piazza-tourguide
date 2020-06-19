import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img
        src="https://piazza.com/images/splash/PageTop/Piazza-Icon.png"
        alt="logo"
      />
      <nav className={styles.nav}>
        <li>
          <a href="https://www.google.com/">Resources</a>
        </li>
        <li>
          <a href="https://www.google.com/">Statistics</a>
        </li>
        <li>
          <a href="https://www.google.com/">Home</a>
        </li>
        <li>
          <a href="https://www.google.com/">Cs 154</a>
        </li>
      </nav>
      <div></div>
    </div>
  );
};
