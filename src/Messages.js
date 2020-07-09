import React from "react";
import styles from "./Messages.module.css";

export const Messages = (props) => {
  return (
    <div className={styles.root}>
      <div>PnllnlTYPE</div>

      <div className={styles.cover}>
        {props.list.map((question, index) => {
          return (
            <div className={styles.k} key={index}>
              {question.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};
