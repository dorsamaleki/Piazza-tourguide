import React, { useState } from "react";
import styles from "./Questions.module.css";
import { Messages } from "./Messages";

//import { Push } from "./Push.js";

export const Questions = (props) => {
  const [isSelected, setIsSelected] = useState(true);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div>
      <span className={styles.root} onClick={handleClick}>
        <div className={styles.date}>{props.date}</div>
        <div className={styles.subject}>{props.subject}</div>
        <br />
        {props.content}

        <div>
          {props.isSelected ? null : <Messages isSelected={isSelected} />}
        </div>
      </span>
    </div>
  );
};
