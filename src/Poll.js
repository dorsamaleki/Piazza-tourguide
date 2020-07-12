import React from "react";
import styles from "./Poll.module.css";
export const Poll = (props) => {
  return (
    <div className={styles.root}>
      <br />
      <br />
      <form>
        <label className={styles.subject}>
          Poll &nbsp;
          <input
            type="text"
            name="name"
            className={styles.textbox}
            placeholder="How was yesterdays lecture ? "
          />
        </label>
      </form>
      <br />
      <br />
      <form>
        <label className={styles.subject}>Choices</label>&nbsp;
        <label>
          <input type="text" name="name" className={styles.textbox2} />
          &nbsp;
          <input type="button" value="Add" className={styles.addbutton} />
        </label>
      </form>
      <br />
      <br />
      <form>
        <label className={styles.subject}>Poll Type</label>&nbsp;
        <label className={styles.radio}>
          <input type="radio" value="option1" checked={true} />
          One choice allowed
        </label>
        &nbsp;
        <label className={styles.radio}>
          <input type="radio" value="option2" checked={false} />
          Multiple choices allowed
        </label>
      </form>
      <br />
      <br />
      <form>
        <input type="button" value="Post Poll" />
        &nbsp;
        <input type="button" value="Draft" />
      </form>
    </div>
  );
};
