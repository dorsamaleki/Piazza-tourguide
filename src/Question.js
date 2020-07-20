import React, { useState } from "react";
import styles from "./Question.module.css";

export const Question = () => {
  const [values, setValues] = useState({ firstName: "", lastName: "" });
  const [selectedFile, setSelectedFile] = useState(null);
  const fileChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadHandler = () => {
    console.log(selectedFile);
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
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
            name="firstName"
            placeholder="How was yesterdays lecture ? "
            onChange={handleChange}
          ></input>
        </label>
        <div>
          {values.firstName} {values.lastName}
        </div>
      </form>

      <br />
      <br />
      <form>
        <label className={styles.subject}>
          Name &nbsp;
          <input
            type="text"
            name="lastName"
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
