import React from "react";
import styles from "./NewPost.module.css";
export const NewPost = (props) => {
  return (
    <div className={styles.root}>
      <form>
        <label className={styles.subject}>Post Type &nbsp;</label>
        <label className={styles.radio}>
          <input type="radio" value="option1" checked={true} />
          <img
            className={styles.img}
            alt="question icon"
            src="https://i1.pngguru.com/preview/793/926/527/quadrates-extended-gray-and-black-question-mark-icon-illustration-png-clipart.jpg"
          />
          Question &nbsp;
        </label>
        <label className={styles.radio}>
          <input type="radio" value="option1" checked={true} />
          <img
            className={styles.img}
            alt="question icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXCDlYYjjONzIJ0u7xqBsKknw_WBGXEID1yw&usqp=CAU"
          />
          Poll &nbsp;
        </label>
        <label className={styles.radio}>
          <input type="radio" value="option1" checked={true} />
          <img
            className={styles.img}
            alt="question icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxA8GAiFcIRCoXzyGWuXs17fPJs43eHUVfXg&usqp=CAU"
          />
          Note
        </label>
      </form>
      <br />
      <form>
        <label className={styles.subject}>Details</label>
      </form>
    </div>
  );
};
