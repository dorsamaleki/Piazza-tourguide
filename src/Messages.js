import React from "react";
import styles from "./Messages.module.css";
import { NewPost } from "./NewPost";
import { Home } from "./Home";
import { Statistics } from "./Statistics";

export const Messages = (props) => {
  return (
    <div className={styles.root}>
      {props.list.map((question) => {
        return (
          <div className={styles.k} key={question.id}>
            <div className={styles.a}>
              {question.id === 1 || question.id === 2 || question.id === 3 ? (
                <div> question</div>
              ) : null}
            </div>

            {question.id === 4 ? <NewPost /> : null}

            {question.id === 7 ? <Home /> : null}
            {question.id === 8 ? (
              <Statistics />
            ) : (
              <div className={styles.a}>{question.text}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};
