import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Main from "./components/pages/Main/Main";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/home" component={Home} />
          {/* <Route exact path="/home/:topic" component={Home} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
