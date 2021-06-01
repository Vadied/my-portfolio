import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { init } from "emailjs-com";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
// import HomeMask from "../HomeMask/HomeMask";

const App = () => {
  init(process.env.EMAIL_ID);

  return (
    <Router>
      <div className="App">
        <Header />
        {/* <HomeMask /> */}
        <div className="content">
          <Switch>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
