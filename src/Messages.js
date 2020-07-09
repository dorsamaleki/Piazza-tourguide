import React from "react";
import styles from "./Messages.module.css";

export const Messages = (props) => {
  return (
    <div className={styles.root}>
      <div>PnllnlTYPE</div>

      <div className={styles.cover}>
        {props.list.map((question) => {
          return <div className={styles.k}>{question.text}</div>;
        })}
      </div>
    </div>
  );
};
