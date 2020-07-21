import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import styles from "./Question.module.css";

export const Question = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
  };
  const [values, setValues] = useState({ firstName: "", lastName: "" });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className={styles.root}>
      <br />
      <br />
      <br />
      <form>
        <label className={styles.subject}>
          Details
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {}}
          />
        </label>
      </form>

      <br />
      <br />
      <br />
      <label className={styles.subject}> Name</label>
      <form className={styles.side1}>
        <label>
          <input
            type="text"
            name="lastName"
            placeholder="Show my name"
            onChange={handleChange}
            className={styles.textbox2}
          />
        </label>
      </form>
      <br />
      <br />
      <br />
      <form className={styles.side2}>
        <input
          type="button"
          value="Post Question"
          className={styles.postbutton}
        />
        &nbsp;
        <input type="button" value="Draft" className={styles.draftbutton} />
      </form>
    </div>
  );
};
