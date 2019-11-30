import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import components
<<<<<<< HEAD
import Navi from './Navi/Navi';
import Login from './Login/Login';

import Flights from './Flights/Flights';
import Airplanes from './Airplanes/Airplanes';
import Seats from './Seats/Seats';
=======
import Navbar from "./Navbar/Navbar";
import Navi from "./Navi/Navi";
import Login from "./Login/Login";

import Flights from "./Flights/Flights";
import Airplanes from "./Airplanes/Airplanes";
import Search from "./Search/Search";
>>>>>>> 957eecd07b079b01bd4aebe858dadfc2e9c030da

import "bootstrap/dist/css/bootstrap.min.css";

import { render } from "react-dom";
import { Router, Link } from "@reach/router";

class App extends React.Component {
<<<<<<< HEAD
	state = {};

	render() {
		return (
			<div className="App">
				<Navi />

				<Router>
					<Login path="/" />
					<Flights path="/flights" />
					<Airplanes path="/planes" />
					<Seats path="/seats" />
				</Router>
			</div>
		);
	}
=======
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
>>>>>>> 957eecd07b079b01bd4aebe858dadfc2e9c030da
}

export default App;
