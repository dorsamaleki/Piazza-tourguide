import React from "react";
import styles from "./SideBar.module.css";
import { Questions } from "./Questions";
import { ButtonSidebar } from "./ButtonSidebar.js";
import { useParams } from "react-router-dom";
import newposticon from "./newposticon.webp";
import searchicon from "./searchicon.png";
export const SideBar = (props) => {
  let { id } = useParams();

  return (
    <div className={styles.top}>
      <div className={styles.side1} id="tour3">
        <ButtonSidebar name="New Post" path="/new-post" icon={newposticon} />
        <ButtonSidebar name="Search" path="/search" icon={searchicon} />
      </div>

      <div className={styles.side2} id="tour1">
        {props.list.map((question) => {
          return (
            <Questions
              key={question.id}
              selected={question.id.toString() === id}
              {...question}
            />
          );
        })}
      </div>
    </div>
  );
};
