import React from "react";
import styles from "./Poll.module.css";
export const Poll = (props) => {
  return (
    <div className={styles.root} id="tour5">
      <br />
      <br />
      <br />
      <label className={styles.subject}>Poll &nbsp;</label>
      <form className={styles.side1}>
        <label>
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
      <br />
      <label className={styles.subject}>Choices</label>&nbsp;
      <form className={styles.side2}>
        <label>
          <input type="text" name="name" className={styles.textbox2} />
          &nbsp;
          <input type="button" value="Add" className={styles.addbutton} />
        </label>
      </form>
      <br />
      <br />
      <br />
      <label className={styles.subject}>Poll Type</label>&nbsp;
      <form className={styles.side3}>
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
      <br />
      <form className={styles.side4}>
        <input type="button" value="Post Poll" className={styles.postbutton} />
        &nbsp;
        <input type="button" value="Draft" className={styles.draftbutton} />
      </form>
    </div>
  );
};
