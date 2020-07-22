import React, { useState } from "react";
import Tour from "reactour";
import { Navbar } from "./Navbar.js";
import styles from "./App.module.css";
import { SideBar } from "./SideBar.js";
import { Messages } from "./Messages.js";

import "./App.css";

const allQuestions = {
  Question1: [
    { header: "Question" },
    { subject: "Homework 7" },
    {
      text:
        "Is there a way to only add attributes to a React component if a certain condition is met? I'm supposed to add required and readOnly attributes to form elements based on an Ajax call after render, but I can't see how to solve this since readOnly='false' is not the same as omitting the attribute completely.",
    },

    { id: 1 },
  ],
  Question2: [
    { header: "Question" },
    { subject: "Poll 1" },
    {
      text: "what day would be the best day for the midterm review?",
    },
    { id: 2 },
  ],
  Question3: [
    { header: "Question" },
    { subject: "Homework 1" },
    {
      text:
        "I am stuck trying to show that coNP^NP is contained in NP. Does anyone have any advice?",
    },
    { id: 3 },
  ],
  NewPost: [{ id: 4 }],
  Search: [{ id: 5 }],
  CS154: [{ id: 6 }],
  Home: [{ id: 7 }],
  Statictics: [{ id: 8 }],
  Resources: [{ id: 9 }],
};

function App(props) {
  const [selectedQuestion, setSelectedQuestion] = useState("Question1");

  const questions = allQuestions[selectedQuestion];

  const [showTour, setShowTour] = useState(false);

  return (
    <div className={styles.body}>
      <div className="grid-container">
        <Navbar
          listt={[
            { name: "CS154", id: 6 },
            { name: "Home", id: 7 },
            { name: "Statictics", id: 8 },
            { name: "Resources", id: 9 },
          ]}
          onSelect={setSelectedQuestion}
          onIconPress={() => setShowTour(true)}
        />
        <SideBar
          listButton={[
            { name: "NewPost", id: 4 },
            { name: "Search", id: 5 },
          ]}
          list={[
            {
              name: "Question1",
              text:
                "Is there a way to only add attributes to a React component if a certain condition is met?",
              date: "5/2",
              icon: "",
              description: "",
              id: 1,
              subject: "Homework 7",
            },
            {
              name: "Question2",
              text: "what day would be the best day for the midterm review?",
              date: "7/8",
              id: 2,
              subject: "Poll 1",
            },
            {
              name: "Question3",
              text:
                "I am stuck trying to show that coNP^NP is contained in NP. Does anyone have any advice?",
              date: "9/7",
              id: 3,
              subject: "Homework 1",
            },
          ]}
          onSelect={setSelectedQuestion}
        />
        <Messages list={questions} />

        <Tour
          steps={steps}
          isOpen={showTour}
          onRequestClose={() => setShowTour(false)}
        />
      </div>
    </div>
  );
}
const steps = [
  {
    selector: "#side1",
    content: "This is my first Step",
  },
  {
    selector: "#side2",
    content: "This is my first Step",
  },
  {
    selector: "#side3",
    content: "This is my first Step",
  },
  {
    selector: "#side4",
    content: "This is my first Step",
  },
  {
    selector: "#side5",
    content: "This is my first Step",
  },
  {
    selector: "#side6",
    content: "This is my first Step",
  },
];
export default App;
