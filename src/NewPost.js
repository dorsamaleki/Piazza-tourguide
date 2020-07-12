import React, { Component } from "react";
import styles from "./NewPost.module.css";
import { Poll } from "./Poll.js";
import { Question } from "./Question.js";

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
  }
  render() {
    return (
      <div className={styles.root}>
        <form onSubmit={this.formSubmit}>
          <label className={styles.subject}>Post Type</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className={styles.radio}>
            <input
              type="radio"
              value="option1"
              checked={this.state.selectedOption === "option1"}
              onChange={this.onValueChange}
            />
            <img
              className={styles.img}
              alt="question icon"
              src="https://i1.pngguru.com/preview/793/926/527/quadrates-extended-gray-and-black-question-mark-icon-illustration-png-clipart.jpg"
            />
            Question
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label className={styles.radio}>
            <input
              type="radio"
              value="option2"
              checked={this.state.selectedOption === "option2"}
              onChange={this.onValueChange}
            />
            <img
              className={styles.img}
              alt="poll icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXCDlYYjjONzIJ0u7xqBsKknw_WBGXEID1yw&usqp=CAU"
            />
            Poll
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label className={styles.radio}>
            <input
              type="radio"
              value="option3"
              checked={this.state.selectedOption === "option3"}
              onChange={this.onValueChange}
            />
            <img
              className={styles.img}
              alt="note icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxA8GAiFcIRCoXzyGWuXs17fPJs43eHUVfXg&usqp=CAU"
            />
            Note
          </label>
        </form>
        {this.state.selectedOption === "option2" ? <Poll /> : null}
        {this.state.selectedOption === "option1" ? <Question /> : null}
      </div>
    );
  }
}
export default NewPost;
