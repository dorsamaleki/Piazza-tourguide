import React from "react";
import styles from "./SideBar.module.css";

const eee = ["Question 1", "Question 2", "Question 3"];

export const SideBar = (props) => {
  return (
    <div className={styles.hoo}>
      <div className={styles.top}>
        <div className={styles.side1}>
          <nav>
            <ul>
              <li>
                <a href="https://www.google.com/">Ce 87</a>

                <a href="https://www.google.com/">Ce 87</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.c}>
          {eee.map((content, index) => {
            return <div className={styles.side2}>{content}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
