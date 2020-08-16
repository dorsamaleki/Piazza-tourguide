import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Tour from "reactour";
import "./App.css";
import styles from "./App.module.css";
import { tour } from "./config/tour.js";
import { Navbar } from "./App/Navbar.js";
import { Home } from "./App/Home.js";
import { NewPost } from "./App/NewPost.js";
import { Statistics } from "./App/Statistics.js";
import { SideBar } from "./App/SideBar.js";
import { ShowQuestion } from "./App/ShowQuestion";
import { getQuestions } from "./api/getQuestions";

function App(props) {
  const [showTour, setShowTour] = useState(false);
  const questions = getQuestions();
  const [tourStep, setTourStep] = useState(0);
  const [updateTour, setUpdateTour] = useState("");
  return (
    <div className={styles.body}>
      <Router>
        <Navbar
          onIconPress={() => setShowTour(true)}
          onHomeClick={() => {
            setTourStep(5);
            setUpdateTour(Date.toString() + "");
          }}
          onStatisticsClick={() => {
            setTourStep(7);
            setUpdateTour(Date.toString() + "");
          }}
        />
        <Route path="/:page?/:id?">
          <SideBar
            list={questions}
            onQuestionsClick={() => {
              setTourStep(1);
              setUpdateTour(Date.toString() + "");
            }}
            onNewpostClick={() => {
              setTourStep(3);
              setUpdateTour(Date.toString() + "");
            }}
          />
        </Route>
        <div className={styles.content}>
          <Switch>
            <Route path="/question/:id">
              <ShowQuestion questions={questions} />
            </Route>
            <Route path="/new-post">
              <NewPost />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/search"></Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Tour
          steps={tour}
          isOpen={showTour}
          onRequestClose={() => setShowTour(false)}
          goToStep={tourStep}
          update={updateTour}
        />
      </Router>
    </div>
  );
}

export default App;
