import React, { useState } from "react";
import styles from "./Statistics.module.css";
import postschart from "../icon/postschart.png";
import userschart from "../icon/userschart.png";

export const Statistics = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className={styles.root}>
      <div id="tour8">
        <div className={styles.subject}>Usage trends</div>
        <br />
        <div className={styles.pic}>
          {selectedOption === "option1" ? (
            <img src={userschart} alt="users chart" />
          ) : (
            <img src={postschart} alt="posts chart" />
          )}
        </div>
        <div className={styles.radio}>
          <label>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleChange}
            />
            Users per day
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleChange}
            />
            Posts per day
          </label>
        </div>
        <br />
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>Top Student Contributors</div>
          <div className={styles.gridItem2}>Top TA Contributors</div>
          <div clasName={styles.gridItem}>
            <ol>
              <li>Walter Lynton</li>
              <li>Filipp Alan</li>
              <li>Jeniffer Allan</li>
              <li>Oriando Ryder</li>
              <li>Patrice Frank</li>
            </ol>
          </div>
          <div clasName={styles.gridItem}>
            <ol className={styles.list}>
              <li>Sanjay Roshni</li>
              <li>Jacki Pierre</li>
              <li>Frieda johnson</li>
              <li>Garey Teodora</li>
              <li>Alaina VonHeisn</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
