import React from "react";
import styles from "./SideBar.module.css";

const eee = [
  "Question 1",
  "Question 2",
  "Question 3",
  "Question 4",
  "Question 1",
  "Question 2",
  "Question 3",
  "Question 4",
];

export const SideBar = (props) => {
  return (
    <div>
      <div className={styles.a}>
        <div className={styles.j}>
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
            return <div className={styles.b}>{content}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
