import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import components
import Navbar from "./Navbar/Navbar";
import Navi from "./Navi/Navi";
import Login from "./Login/Login";

import Flights from "./Flights/Flights";
import Airplanes from "./Airplanes/Airplanes";
import Search from "./Search/Search";

import "bootstrap/dist/css/bootstrap.min.css";

import { render } from "react-dom";
import { Router, Link } from "@reach/router";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Navi />

        <Router>
          <Login path="/" />
          <Flights path="/flights" />
          <Airplanes path="/planes" />
          <Search path="/search" />
        </Router>
      </div>
    );
  }
}

export default App;
