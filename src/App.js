import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>GA Airlines</h1>
        <Flights />
      </div>
    );
  }
}

class Flights extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <p>Please select a flight here.</p>
        <h4>Flights</h4>
        <thead>
          <tr>
            <th>Date</th>
            <th>Flight</th>
            <th>From > To</th>
            <th>Plane</th>
            <th>Seats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3/1/13</td>
            <td>23</td>
            <td>JFK > SFO</td>
            <td>757</td>
            <td>32</td>
          </tr>
        </tbody>
      </div>
    );
  }
}

export default App;
