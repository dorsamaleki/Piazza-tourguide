import React from "react";
import styles from "./SideBar.module.css";
import { Questions } from "./Questions";
import { ButtonSidebar } from "./ButtonSidebar.js";
export const SideBar = (props) => {
  return (
    <div className={styles.top}>
      <div className={styles.side1}>
        {props.listButton.map((k, index) => {
          return (
            <div>
              <ButtonSidebar
                onClick={() => props.onSelect(k.name)}
                key={index}
                {...k}
              />
              {props.name}
            </div>
          );
        })}
      </div>
      <div className={styles.side2}>
        {props.list.map((cquestion, index) => {
          return (
            <Questions
              onClick={() => props.onSelect(cquestion.name)}
              key={index}
              {...cquestion}
            />
          );
        })}
      </div>
    </div>
  );
};
