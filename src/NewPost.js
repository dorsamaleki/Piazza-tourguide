import React, { useState } from "react";
import styles from "./NewPost.module.css";
import { Poll } from "./Poll.js";
import { Question } from "./Question.js";

export const NewPost = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const onValueChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.root}>
      <form>
        <label className={styles.subject}>Post Type</label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label className={styles.radio}>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={onValueChange}
          />
          <img
            className={styles.img}
            alt="question icon"
            src="https://i1.pngguru.com/preview/793/926/527/quadrates-extended-gray-and-black-question-mark-icon-illustration-png-clipart.jpg"
          />
          Question
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label className={styles.radio}>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={onValueChange}
          />
          <img
            className={styles.img}
            alt="poll icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXCDlYYjjONzIJ0u7xqBsKknw_WBGXEID1yw&usqp=CAU"
          />
          Poll
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label className={styles.radio}>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={onValueChange}
          />
          <img
            className={styles.img}
            alt="note icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxA8GAiFcIRCoXzyGWuXs17fPJs43eHUVfXg&usqp=CAU"
          />
          Note
        </label>
      </form>
      {selectedOption === "option2" ? <Poll /> : null}
      {selectedOption === "option1" ? <Question /> : null}
    </div>
  );
};
