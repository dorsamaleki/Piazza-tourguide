import React from "react";
import styles from "./SideBar.module.css";
import { Questions } from "./Questions";

export const SideBar = (props) => {
  return (
    <div className={styles.top}>
      <div className={styles.side1}>
        <nav>
          <ul>
            <li>
              <img
                src="https://cdn4.iconfinder.com/data/icons/gray-toolbar-7/512/page-512.png"
                alt="new post icon"
              />
              <a href="https://www.google.com/">New Post</a>
            </li>
            <li>
              <img
                src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png"
                alt="search icon"
              />
              <a href="https://www.google.com/">Search</a>
            </li>
          </ul>
        </nav>
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
