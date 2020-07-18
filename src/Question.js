import React, { useState } from "react";
import styles from "./Question.module.css";

export const Question = () => {
  const [values, setValues] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const fileChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadHandler = () => {
    console.log(selectedFile);
  };
  const handleChange = (event) => {
    setValues({ ...values, a: event.target.value });
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
            name="details"
            placeholder="How was yesterdays lecture ? "
            onChange={handleChange}
          ></input>
        </label>
      </form>

      <br />
      <br />
      <form>
        <label className={styles.subject}>
          Name &nbsp;
          <input
            type="text"
            name="name"
            placeholder="Show my name"
            onChange={handleChange}
          />
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
