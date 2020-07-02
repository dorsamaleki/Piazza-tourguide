import React from "react";
import styles from "./Questions.module.css";

export const Questions = (props) => {
  return (
    <span className={styles.root}>
      {props.subject}
      <br />
      {props.content}
    </span>
  );
};
