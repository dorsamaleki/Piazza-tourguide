import React, { useState } from "react";
import styles from "./NewPost.module.css";
import { Poll } from "./Poll.js";
import { Question } from "./Question.js";
import pollicon from "../icon/pollicon.png";
import questionicon from "../icon/questionicon.png";
import noteicon from "../icon/noteicon.png";

export const NewPost = () => {
  const [selectedOption, setSelectedOption] = useState("option2");
  const onValueChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div id="tour6">
      <div className={styles.root} id="tour4">
        <label className={styles.subject}>Post Type</label>
        <form className={styles.side}>
          <label className={styles.radio}>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={onValueChange}
            />
            <img
              className={styles.questionicon}
              alt="question icon"
              src={questionicon}
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
            <img className={styles.pollicon} alt="poll icon" src={pollicon} />
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
            <img className={styles.noteicon} alt="note icon" src={noteicon} />
            Note
          </label>
        </form>
        {selectedOption === "option2" ? <Poll /> : null}
        {selectedOption === "option1" ? <Question /> : null}
      </div>
    </div>
  );
};
