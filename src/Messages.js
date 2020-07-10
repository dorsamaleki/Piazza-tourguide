import React from "react";
import styles from "./Messages.module.css";
import { Poll } from "./Poll.js";
export const Messages = (props) => {
  return (
    <div className={styles.root}>
      <div>PnllnlTYPE</div>

      <div className={styles.cover}>
        {props.list.map((question) => {
          return (
            <div className={styles.k} key={question.id}>
              {question.id === 5 ? <Poll list={question} /> : question.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};
