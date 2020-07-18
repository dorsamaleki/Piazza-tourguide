import React, { useState } from "react";
import styles from "./Question.module.css";

export const Question = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadHandler = () => {
    console.log(selectedFile);
  };

  return (
    <div className={styles.root}>
      <br />
      <br />
      <input type="file" onChange={fileChangeHandler} />
      <button onClick={uploadHandler}>upload</button>

      <form>
        <label className={styles.subject}>
          Details &nbsp;
          <input
            className={styles.textbox}
            type="text"
            name="name"
            placeholder="How was yesterdays lecture ? "
          ></input>
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
