import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = (props) => {
  return (
    <div className="item1" id="side6">
      <div className={styles.navbar1}>
        <img
          src="https://i.pinimg.com/originals/7f/13/c4/7f13c426247c53312b7fa11fded20367.png"
          alt="logo"
          className={styles.img1}
        />

        <div onClick={props.onIconPress} className={styles.helpIcon}>
          ?
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIjpX9iO2q9K3wV5KcZ0_p9jRtaiCD-A5fNw&usqp=CAU"
          alt="piazza logo"
          className={styles.img2}
        />
        <nav>
          {props.listt.map((item) => {
            return (
              <div
                className={styles.text}
                key={item.id}
                onClick={() => props.onSelect(item.name)}
              >
                {item.name}
              </div>
            );
          })}
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
      </div>
    </div>
  );
};
