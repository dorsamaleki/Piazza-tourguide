import React from "react";
import "./App.css";
import { Navbar } from "./Navbar.js";
import styles from "./App.module.css";
import { SideBar } from "./SideBar.js";
function App() {
  return (
    <div className={styles.body}>
      <Navbar />
      <SideBar />
      <div></div>
    </div>
  );
}

export default App;
