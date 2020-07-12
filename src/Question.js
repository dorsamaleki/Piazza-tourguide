import React from "react";
import styles from "./Question.module.css";
export const Question = () => {
  return (
    <div className={styles.root}>
      <br />
      <br />
      <form>
        <label className={styles.subject}>
          Details &nbsp;
          <input
            className={styles.textbox}
            type="text"
            name="name"
            placeholder="How was yesterdays lecture ? "
          />
        </label>
      </form>
      <br />
      <br />
      <form>
        <label className={styles.subject}>
          Name &nbsp;
          <input type="text" name="name" placeholder="Show my name" />
        </label>
      </form>
      <br />
      <br />
      <form>
        <input type="button" value="Post Question" />
        &nbsp;
        <input type="button" value="Draft" />
      </form>
    </div>
  );
};
