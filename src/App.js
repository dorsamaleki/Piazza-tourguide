import React from "react";
import { Navbar } from "./Navbar.js";
import styles from "./App.module.css";
import { SideBar } from "./SideBar.js";
import { Messages } from "./Messages.js";

import "./App.css";
function App() {
  return (
    <div className={styles.body}>
      <div className="grid-container">
        <Navbar />
        <SideBar />
        <Messages />
      </div>
    </div>
  );
}

export default App;
