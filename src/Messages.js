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
            {question.id === 4 ? <NewPost list={question} /> : null}
            {question.id === 7 ? <Home list={question} /> : null}
            {question.id === 8 ? <Statistics list={question} /> : question.text}
          </div>
        );
      })}
    </div>
  );
};
