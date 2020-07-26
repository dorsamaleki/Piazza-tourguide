import React, { useState } from "react";
import Tour from "reactour";
import { Navbar } from "./Navbar.js";
import styles from "./App.module.css";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { NewPost } from "./NewPost.js";
import { Statistics } from "./Statistics.js";
import { Home } from "./Home.js";
import { SideBar } from "./SideBar.js";
import { ShowQuestion } from "./App/ShowQuestion";
import { getQuestions } from "./api/getQuestions";
import { tour } from "./config/tour.js";

function App(props) {
  const [showTour, setShowTour] = useState(false);
  const questions = getQuestions();

  return (
    <div className={styles.body}>
      <Router>
        <Navbar onIconPress={() => setShowTour(true)} />
        <Route path="/:page?/:id?">
          <SideBar list={questions} />
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
        />
      </Router>
    </div>
  );
}

export default App;
