import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Main from "./components/pages/Main/Main";
import Page from "./components/pages/Page/Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/home" component={Page} />
          {/* <Route exact path="/home/:topic" component={Home} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
