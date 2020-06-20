import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar1}>
        <img
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
      </div>
      <div className={styles.navbar2}>
        <img
          src="https://cdn.clipart.email/9ab111a3d83e524f23e2fad7d5345d7a_folder-replacement-yellow-folder-icon-transparent-background-png-_512-512.jpeg"
          alt="logo"
        />
        <img
          src="https://cdn.clipart.email/9ab111a3d83e524f23e2fad7d5345d7a_folder-replacement-yellow-folder-icon-transparent-background-png-_512-512.jpeg"
          alt="logo"
        />
        <img
          src="https://cdn.clipart.email/9ab111a3d83e524f23e2fad7d5345d7a_folder-replacement-yellow-folder-icon-transparent-background-png-_512-512.jpeg"
          alt="logo"
        />
        <img
          src="https://cdn.clipart.email/9ab111a3d83e524f23e2fad7d5345d7a_folder-replacement-yellow-folder-icon-transparent-background-png-_512-512.jpeg"
          alt="logo"
        />
        <img
          src="https://cdn.clipart.email/9ab111a3d83e524f23e2fad7d5345d7a_folder-replacement-yellow-folder-icon-transparent-background-png-_512-512.jpeg"
          alt="logo"
        />
        <img
          src="https://cdn.clipart.email/9ab111a3d83e524f23e2fad7d5345d7a_folder-replacement-yellow-folder-icon-transparent-background-png-_512-512.jpeg"
          alt="logo"
        />
        <img
          src="https://cdn.clipart.email/9ab111a3d83e524f23e2fad7d5345d7a_folder-replacement-yellow-folder-icon-transparent-background-png-_512-512.jpeg"
          alt="logo"
        />
        <nav>
          <ul>
            <li>
              <a href="https://www.google.com/">Drafts</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
