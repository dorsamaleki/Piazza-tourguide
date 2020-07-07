import React from "react";
import { Navbar } from "./Navbar.js";
import styles from "./App.module.css";
import { SideBar } from "./SideBar.js";
import { Messages } from "./Messages.js";

import "./App.css";
const eee = {
  Question1: [
    { subject: "Question 1" },
    { content: "hoewohwhoehoheoheoheoheoheohoe??" },
    { id: 1 },
    { date: "9/25" },
  ],
  Question2: [
    { subject: "Question 2" },
    { content: "llllllllll" },
    { id: 2 },
    { date: "5/8" },
  ],
};
const maha = [
  {
    subject: "Question 1",
    content: "hoewohwhoehoheoheoheoheoheohoe??",
    id: 1,
    date: "9/25",
  },
  {
    subject: "Question 2",
    content: "jahlhdioahlhoe??",
    id: 1,
    date: "9/25",
  },
];
function App(props) {
  const oo = eee.Question1;
  return (
    <div className={styles.body}>
      <div className="grid-container">
        <Navbar />
        <SideBar eee={maha} />
        <Messages list={oo} />
      </div>
    </div>
  );
}

export default App;
