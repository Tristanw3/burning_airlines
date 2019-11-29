import React from "react";
import "./Navbar.css";
class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <nav>
          <a href="./">Home </a>
          <a href="./airplanes">Airplanes</a>
          <a href="./flights">Flights</a>

        </nav>
      </div>
    );
  }
}

export default Navbar;
