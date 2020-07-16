import React from "react";
import styles from "./SideBar.module.css";
import { Questions } from "./Questions";
import { ButtonSidebar } from "./ButtonSidebar.js";
export const SideBar = (props) => {
  return (
    <div className={styles.top}>
      <div className={styles.side1} id="side5">
        {props.listButton.map((k) => {
          return (
            <div>
              <ButtonSidebar
                onClick={() => props.onSelect(k.name)}
                key={k.id}
                {...k}
              />
              {props.name}
            </div>
          );
        })}
      </div>
      <div className={styles.side2} id="side4">
        {props.list.map((cquestion) => {
          return (
            <Questions
              onClick={() => props.onSelect(cquestion.name)}
              key={cquestion.id}
              elementId={"side" + cquestion.id}
              {...cquestion}
            />
          );
        })}
      </div>
    </div>
  );
};
