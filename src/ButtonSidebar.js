import React from "react";
import styles from "./ButtonSidebar.module.css";
export const ButtonSidebar = (props) => {
  return (
    <div className={styles.root} onClick={props.onClick}>
      <img
        className={styles.img}
        src="https://cdn4.iconfinder.com/data/icons/gray-toolbar-7/512/page-512.png"
        alt="new post icon"
      />
      <img
        className={styles.img}
        src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png"
        alt="search icon"
      />

      <div>{props.name}</div>
    </div>
  );
};
