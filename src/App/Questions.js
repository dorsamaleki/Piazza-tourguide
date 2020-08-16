import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Questions.module.css";
import cn from "classnames";

export const Questions = (props) => {
  return (
    <NavLink
      to={"/question/" + props.id.toString()}
      className={cn(styles.root, { [styles.selected]: props.selected })}
    >
      <div className={styles.date}>{props.date}</div>
      <div className={styles.subject}>{props.subject}</div>
      <div className={styles.text}>{props.text}</div>
    </NavLink>
  );
};
