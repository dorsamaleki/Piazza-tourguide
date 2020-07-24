import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import styles from "./Messages.module.css";
import { NewPost } from "./NewPost";
import { Home } from "./Home";
import { Statistics } from "./Statistics";

export const Messages = (props) => {
  return (
    <div>
      <Router>
        <div>
          <div>
            <div>
              {props.list.map((question) => {
                return (
                  <div>
                    {question.id} {question.text}
                  </div>
                );
              })}
            </div>
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
                  <Link to="/ShowQuestion/:2">b</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.root}>
            <Switch>
              <Route path="/ShowQuestion/:slug">
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
    </div>
  );
};
const ShowQuestion = (props) => {
  let { slug } = useParams();
  return <h3>now show{slug}</h3>;
};
