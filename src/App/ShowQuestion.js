import React from "react";
import { useParams } from "react-router-dom";

export const ShowQuestion = (props) => {
  let { id } = useParams();
  const question = props.questions.find(
    (question) => question.id.toString() === id
  );

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div>
      <div>{question.subject}</div>
      <div>{question.header}</div>
      <div>{question.text}</div>
    </div>
  );
};
