import React from "react";
import styles from "./Questions.module.css";

export const Questions = (props) => {
  return (
    <span className={styles.root}>
      <div className={styles.date}>{props.date}</div>
      <div className={styles.subject}>{props.subject}</div>
      <br />
      {props.content}
    </span>
  );
};
