import React from "react";
import "./seats.css";
import config from "../config";

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
    ],

    test: ["not yet"]
  };

/* will update the seats, rows and columns state when written */
  updateSeats(data) {
    console.log(data.rows);
    // this.state.seats = dat
  }
/* end work-in-progress */


  render() {
    /* work-in-progress to fetch DTO from /flights/:id/info.json*/
    let self = this;
    
    fetch(config.endpoint) // this needs to go to /flights/:id/info.json
      .then(response => response.json)
      .then(json => self.updateSeats(json))
    /* end work-in-progress */
    
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
