import React, { Component } from "react";
import { Route } from "react-router-dom";

import "../css/main.css";

import Header from "./Header/Header";
import LoginForm from "./LoginForm";
import Footer from "./Footer/Footer";
// import ReactDebounce from "./ReactDebounce";
import ReactThrottle from "./ReactThrottle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/Throttle" component={ReactThrottle} />
        <Footer />
      </div>
    );
  }
}

export default App;
