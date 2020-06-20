import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img
        className={styles.logo}
        src="https://piazza.com/images/splash/PageTop/Piazza-Icon.png"
        alt="logo"
      />
      <nav>
        <ul>
          <li>
            <a href="https://www.google.com/">Ce 87</a>
          </li>
          <li>
            <a href="https://www.google.com/">Q&A</a>
          </li>
          <li>
            <a href="https://www.google.com/">Resources</a>
          </li>
          <li>
            <a href="https://www.google.com/">Statistics</a>
          </li>
        </ul>
      </nav>
      <div></div>
    </div>
  );
};
