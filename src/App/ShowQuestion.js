import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ShowQuestion.module.css";

export const ShowQuestion = (props) => {
  let { id } = useParams();
  const question = props.questions.find(
    (question) => question.id.toString() === id
  );
  if (!question) {
    return <div>Question not found</div>;
  }
  return (
    <div className={styles.root} id="tour2">
      <div className={styles.subject}>
        <div className={styles.questionicon}>?</div>
        <div className={styles.subjecttext}>question</div>
      </div>
      <div className={styles.text}>
        <div>{question.subject}</div>
        <div>{question.text}</div>
      </div>
    </div>
  );
};
