import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar/Navbar";
import Login from "./Login/Login";

import Flights from "./Flights/Flights";
import Airplanes from "./Airplanes/Airplanes";

import "bootstrap/dist/css/bootstrap.min.css";

import { render } from "react-dom"
import { Router, Link } from "@reach/router"




class App extends React.Component {
  state = {};


  render() {
    return (
      <div className="App">
        <Navbar />

        <Router>

          <Login path="/" />
          <Flights path="/flights" />
          <Airplanes path="/planes" />

        </Router>
      </div>
    );
  }
}


export default App;
