import React from "react";
import styles from "./Messages.module.css";

export const Messages = (props) => {
  return (
    <div className={styles.root}>{props.isSelected ? null : "jooo   "}</div>
  );
};
