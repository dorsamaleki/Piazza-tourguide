import React from "react";
import styles from "./Questions.module.css";

export const Questions = (props) => {
  return (
    <span className={styles.root} onClick={props.onClick} id={props.elementId}>
      <div className={styles.date}>{props.date}</div>
      <div className={styles.subject}>{props.name}</div>
      <br />
      {props.text}
    </span>
  );
};
