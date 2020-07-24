import React from "react";
import styles from "./ButtonSidebar.module.css";
import { NavLink } from "react-router-dom";

export const ButtonSidebar = (props) => {
  return (
    <NavLink to={props.path} className={styles.root}>
      <img className={styles.img} src={props.icon} alt="new post icon" />
      <div>{props.name}</div>
    </NavLink>
  );
};
