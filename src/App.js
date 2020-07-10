import React, { useState } from "react";
import { Navbar } from "./Navbar.js";
import styles from "./App.module.css";
import { SideBar } from "./SideBar.js";
import { Messages } from "./Messages.js";

import "./App.css";

const allQuestions = {
  Question1: [
    { text: "But myIndex is returning an empty string, why?" },
    {
      text:
        "I want to do a navigation. Not from a link, but from a dropdown selection (as an example). How can I do this in code? What is this.context?",
    },
  ],
  Question2: [
    {
      text:
        "How do I declare a 2 dimensional array in JavaScript? How would I access its members? ",
    },
  ],
  Question3: [
    { text: "I saw the Navigation mixin, but can I do this without mixins?" },
  ],
  NewPost: [{ text: "New Posttyyyyy" }],
  Search: [{ text: "Searchhyy" }],
};

function App(props) {
  const [selectedQuestion, setSelectedQuestion] = useState("Question1");

  const questions = allQuestions[selectedQuestion];
  return (
    <div className={styles.body}>
      <div className="grid-container">
        <Navbar />
        <SideBar
          listButton={[
            { name: "NewPost", text: "New Posttyyyyy" },
            { name: "Search", text: "Searchhyy" },
          ]}
          list={[
            {
              name: "Question1",
              text: "But myIndex is returning an empty string, why?",
              date: "5/2",
              icon: "",
              description: "",
            },
            {
              name: "Question2",
              text:
                "How do I declare a 2 dimensional array in JavaScript? How would I access its members? ",
              date: "7/8",
            },
            {
              name: "Question3",
              text:
                "I saw the Navigation mixin, but can I do this without mixins?",
              date: "9/7",
            },
          ]}
          onSelect={setSelectedQuestion}
        />
        <Messages list={questions} />
      </div>
    </div>
  );
}

export default App;
