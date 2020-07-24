import React from "react";
import styles from "./SideBar.module.css";
import { Questions } from "./Questions";
import { ButtonSidebar } from "./ButtonSidebar.js";
import { useParams } from "react-router-dom";

export const SideBar = (props) => {
  let { id } = useParams();

  return (
    <div className={styles.top}>
      <div className={styles.side1} id="side5">
        <ButtonSidebar
          name="New Post"
          path="/new-post"
          icon="https://cdn4.iconfinder.com/data/icons/gray-toolbar-7/512/page-512.png"
        />
        <ButtonSidebar
          name="Search"
          path="/search"
          icon="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png"
        />
      </div>

      <div className={styles.side2} id="side4">
        {props.list.map((question) => {
          return (
            <Questions
              key={question.id}
              elementId={"side" + question.id}
              selected={question.id.toString() === id}
              {...question}
            />
          );
        })}
      </div>
    </div>
  );
};
