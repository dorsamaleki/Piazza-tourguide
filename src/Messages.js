import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./Messages.module.css";
import { NewPost } from "./NewPost";
import { Home } from "./Home";
import { Statistics } from "./Statistics";
import { ShowQuestion } from "./ShowQuestion";

export const Messages = (props) => {
  return (
    <Router>
      <div>
        <div>
          <nav className={styles.nav}>
            <ul>
              <li className={styles.text}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.text}>
                <Link to="/Statistics">Statistics</Link>
              </li>
              <li className={styles.text}>
                <Link to="/NewPost">NewPost</Link>
              </li>
              <li className={styles.text}>
                <Link to="/ShowQuestion">ShowQuestion </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.root}>
          <Switch>
            <Route path="/ShowQuestion">
              <ShowQuestion />
            </Route>
            <Route path="/NewPost">
              <NewPost />
            </Route>
            <Route path="/Statistics">
              <Statistics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
