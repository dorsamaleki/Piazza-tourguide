import React from "react";
import styles from "./Messages.module.css";

export const Messages = (props) => {
  return (
    <div className={styles.root}>
      {props.list.map((co) => {
        return <div>{co.content}</div>;
      })}
    </div>
  );
};
