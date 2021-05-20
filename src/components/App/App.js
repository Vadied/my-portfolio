import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import HomeMask from "../HomeMask/HomeMask";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <HomeMask />
        <div className="content">
          <Switch>
            <Route path="/services">{/* <Users /> */}</Route>
            <Route path="/portfolio">{/* <Users /> */}</Route>
            <Route path="/contacts">{/* <Users /> */}</Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
