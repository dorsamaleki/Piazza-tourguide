import React from "react";
import styles from "./SideBar.module.css";

const eee = ["Question 1", "Question 2", "Question 3", "Question 4"];

export const SideBar = (props) => {
  return (
    <div className={styles.root}>
      {eee.map((content, index) => {
        return <div>{content}</div>;
      })}
    </div>
  );
};
