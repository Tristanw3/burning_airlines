import React from "react";
import "./seats.css";
import { BACKEND_URL } from "../config";

export default class Seats extends React.Component {
  state = {
    isBooked: false,
    seats: [
      ["Jane", null, "Trent", null],
      ["John", "Kim", "Trent", "Sam"],
      ["Jack", null, null, "Dylan"],
      ["Sally", null, "Trent", "Dave"],
      ["Dylan", null, null, "Dave"],
      ["Sally", null, "Trent", "Dave"]
    ]
  };

  updateSeats(data) {
    this.setState(state => {
      return {
        ...state,
        seats: data.isTaken,
        rows: data.rows,
        columns: data.columns
      };
    });
  }

  componentDidMount() {
    let self = this;

    fetch(BACKEND_URL + "/flights/" + "1" /* <-- fix */ + "/info.json") // this needs to go to /flights/:id/info.json
      .then(response => response.json())
      .then(json => self.updateSeats(json));
  }

  render() {
    let freeSeats = [];
    this.state.seats.forEach(function(ele) {
      ele.forEach(function(ele2) {
        if (ele2 === null) {
          freeSeats.push(ele2);
        }
      });
    });

    // const optionList = freeSeats.map((op, ind) => <option value={op.seatNum}>{op.seatNumn}</option>);

    const seatsArray = this.state.seats.map(val => {
      return val.map((val2, ind) => {
        if (val2 !== null) {
          return (
            <div key={val + ind} className="seatSquare seatSquareTaken">
              <div className="seat">
                <div className="base taken" />
                <div className="top taken" />
              </div>
              <p>{val2}</p>
            </div>
          );
        } else {
          return (
            <div key={val + ind} className="seatSquare">
              <div className="seat">
                <div className="base" />
                <div className="top" />
              </div>
              <p className="avail">Available</p>
            </div>
          );
        }
      });
    });

    return (
      <div id="seats">
        <div className="seatMap">{seatsArray}</div>
        <p id="availableSeatsParagraph">
          There are {freeSeats.length} available seats
        </p>
        <div className="selectSeat">
          <label>Select a seat</label>

          <button>Select</button>
        </div>
      </div>
    );
  }
}
