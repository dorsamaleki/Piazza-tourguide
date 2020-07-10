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
    { id: 1 },
  ],
  Question2: [
    {
      text:
        "How do I declare a 2 dimensional array in JavaScript? How would I access its members? ",
    },
    { id: 2 },
  ],
  Question3: [
    { text: "I saw the Navigation mixin, but can I do this without mixins?" },
    { id: 3 },
  ],
  NewPost: [{ text: "New Posttyyyyy" }, { id: 4 }],
  Search: [{ text: "Searchhyy" }, { id: 5 }],
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
            { name: "NewPost", text: "New Posttyyyyy", id: 4 },
            { name: "Search", text: "Searchhyy", id: 5 },
          ]}
          list={[
            {
              name: "Question1",
              text: "But myIndex is returning an empty string, why?",
              date: "5/2",
              icon: "",
              description: "",
              id: 1,
            },
            {
              name: "Question2",
              text:
                "How do I declare a 2 dimensional array in JavaScript? How would I access its members? ",
              date: "7/8",
              id: 2,
            },
            {
              name: "Question3",
              text:
                "I saw the Navigation mixin, but can I do this without mixins?",
              date: "9/7",
              id: 3,
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
