import React from "react";
import "./App.css";
import { Navbar } from "./Navbar.js";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.body}>
      <Navbar />
      <div></div>
    </div>
  );
}

export default App;
