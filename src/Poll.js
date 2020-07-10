import React from "react";
import styles from "./Poll.module.css";
export const Poll = (props) => {
  return (
    <div className={styles.root}>
      <form>
        <label className={styles.subject}>Post Type &nbsp;</label>
        <label className={styles.radio}>
          <input type="radio" value="option1" checked={false} />
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
          <input type="radio" value="option1" checked={false} />
          <img
            className={styles.img}
            alt="question icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxA8GAiFcIRCoXzyGWuXs17fPJs43eHUVfXg&usqp=CAU"
          />
          Note
        </label>
      </form>
      <br />
      <br />
      <form>
        <label className={styles.subject}>
          Poll &nbsp;
          <input type="text" name="name" className={styles.textbox} />
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
