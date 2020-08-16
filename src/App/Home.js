import React from "react";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.root} id="tour6">
      <div className={styles.subject}>Class at a Glance </div>
      <br />
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <div className={styles.exclamationMarkIcon}>!</div>&nbsp; 3 unread
          posts
        </div>
        <div className={styles.gridItem}>
          <div className={styles.number}>3</div>&nbsp; total posts
        </div>
        <div className={styles.gridItem}>
          <div className={styles.exclamationMarkIcon}>!</div>&nbsp; 1 unresolved
          followup
        </div>
        <div className={styles.gridItem}>
          <div className={styles.number}>0</div>&nbsp; student responses
        </div>
        <div className={styles.gridItem}>
          <div className={styles.tickIcon}>✓</div>&nbsp; no answered questions
        </div>
        <div className={styles.gridItem}>
          <div className={styles.number}>0</div>&nbsp; TA responses
        </div>
      </div>
    </div>
  );
};
