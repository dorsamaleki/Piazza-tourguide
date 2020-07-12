import React from "react";
import styles from "./Messages.module.css";

import NewPost from "./NewPost";
export const Messages = (props) => {
  return (
    <div className={styles.root}>
      <div>PnllnlTYPE</div>

      <div className={styles.cover}>
        {props.list.map((question) => {
          return (
            <div className={styles.k} key={question.id}>
              {question.id === 4 ? <NewPost list={question} /> : question.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};
