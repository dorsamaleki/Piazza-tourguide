import React from "react";
import styles from "./Home.module.css";
export const Home = () => {
  return (
    <div>
      <div className={styles.subject}>Class at a Glance</div>
      <br />
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <img
            className={styles.exclamationMarkIcon}
            alt="exclamation mark icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCnxZ3cwCPgktrfSLzCeBtXYcThC_0s0wKMg&usqp=CAU"
          />
          <div className={styles.text}>3 unread posts</div>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.number}>3</div>&nbsp; total posts
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.exclamationMarkIcon}
            alt=" icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCnxZ3cwCPgktrfSLzCeBtXYcThC_0s0wKMg&usqp=CAU"
          />
          <div className={styles.text}>1 unresolved followup</div>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.number}>0</div>&nbsp; student responses
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.tickIcon}
            alt="tick icon"
            src="https://lh3.googleusercontent.com/proxy/Wk5pCD4Z91pykG5rNDFUfXyyh9QyyexpuX4fi5QkkeuEDrPBM7I0j_8XVreCAYibDWT3fjhv1Bl1D7Klq_lQY-WiKCWgGrjLyNm-zK9esgb_1GJsG2ZZ_qr-XQbFhscKIr7uoaAv9qYmEe3eq1d9BJaQGNrvKGIUaeYDzg"
          />
          <div className={styles.text}> no answered questions</div>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.number}>0</div>&nbsp;TA responses
        </div>
      </div>
    </div>
  );
};