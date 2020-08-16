import React from "react";
import { useParams } from "react-router-dom";
import styles from "./SideBar.module.css";
import { Questions } from "./Questions";
import { ButtonSidebar } from "./ButtonSidebar.js";
import newposticon from "../icon/newposticon.webp";
import searchicon from "../icon/searchicon.png";

export const SideBar = (props) => {
  let { id } = useParams();
  return (
    <div className={styles.top}>
      <div className={styles.side1} id="tour3" onClick={props.onNewpostClick}>
        <ButtonSidebar name="New Post" path="/new-post" icon={newposticon} />
        <ButtonSidebar name="Search" path="/search" icon={searchicon} />
      </div>
      <div className={styles.side2} id="tour1" onClick={props.onQuestionsClick}>
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
