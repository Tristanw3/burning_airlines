import React, { Fragment } from "react";
import "./Flights.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table, Container } from "react-bootstrap";
import { BACKEND_URL } from "../config";
class Flights extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <FlightsList />
      </div>
    );
  }
}
class FlightsList extends React.Component {
  state = {
    flightList: [],
    flightDate: [],
    flightId: [],
    flightFrom: [],
    flightTo: [],
    flightModel: [],
    flightSeats: []
  };
  componentDidMount() {
    let self = this;

    fetch(BACKEND_URL + "/flights.json") // this needs to go to /flights/:id/info.json
      .then(response => response.json())
      .then(json => {
        self.setState(state => {
          console.log("json :", json);

          return {
            ...state,
            flightList: [...json]
          };
        });
      });
  }

  // $.ajax({
  //   url: '/flights.json',
  //   dataType: 'json',
  //   type: 'POST',
  //   data: flightList,
  //   success: function(data) {
  //     this.setState({data: flightList})
  //   }.bind(this),
  //   error: function(xhr, status, err){

  //   }.bind(this)
  // })

  handleFlightDateEntered(event) {
    const newFlightDate = event.target.value
      .split("-")
      .reverse()
      .join("/");
    console.log(newFlightDate);
    this.setState(state => ({ ...state, flightDate: newFlightDate }));
  }
  handleFlightIdEntered(event) {
    const newFlightId = event.target.value.toUpperCase();
    this.setState(state => ({ ...state, flightId: newFlightId }));
  }
  handleFlightFromEntered(event) {
    const newFlightFrom = event.target.value.toUpperCase();
    this.setState(state => ({ ...state, flightFrom: newFlightFrom }));
  }
  handleFlightToEntered(event) {
    const newFlightTo = event.target.value.toUpperCase();
    this.setState(state => ({ ...state, flightTo: newFlightTo }));
  }
  handlePlaneModelEntered(event) {
    const newPlaneModel = event.target.value;
    this.setState(state => ({ ...state, flightModel: newPlaneModel }));
  }
  handleFlightSeatsEntered(event) {
    const newFlightSeats = event.target.value;
    this.setState(state => ({ ...state, flightSeats: newFlightSeats }));
  }
  handleFlightAdded() {
    this.setState(state => {
      const newFlightList = [
        ...state.flightList,
        {
          flightDate: state.flightDate,
          flightId: state.flightId,
          flightFrom: state.flightFrom,
          flightTo: state.flightTo,
          flightModel: state.flightModel,
          flightSeats: state.flightSeats
        }
      ];
      console.log(newFlightList);
      return { ...state, flightList: newFlightList };
    });
  }
  render() {
    const flightElements = this.state.flightList.map((flightList, index) => {
      return (
        // <tbody key={index}>
        //   <tr>
        //     <td>{flightList.flightDate}</td>
        //     <td>
        //       <a href={"/flights/" + flightList.id}>{flightList.flightId}</a>
        //     </td>
        //     <td>{flightList.flightFrom}</td>
        //     <td>{flightList.flightTo}</td>
        //     <td>{flightList.flightModel}</td>
        //     <td>{flightList.flightSeats}</td>
        //   </tr>
        // </tbody>
        // <Fragment>
        <tbody id="myTable" key={flightList.id}>
          <tr>
            <td>
              {flightList.date
                .split("-")
                .reverse()
                .join("/")}
            </td>
            <td>
              <a href={"/flights/" + flightList.id}>
                {flightList.flight_number}
              </a>
            </td>
            <td>{flightList.origin}</td>
            <td>{flightList.destination}</td>
            <td>{flightList.airplane_model}</td>
            <td>{flightList.capacity}</td>
          </tr>
        </tbody>
        // </Fragment>
      );
      //   <li key={index}>{flightList.flightId}</li>;
    });
    return (
      <div>
        {/* <h2>GA Airlines</h2>
        <label id="Date">
          Date
          <input
            type="Date"
            onChange={event => this.handleFlightDateEntered(event)}
          />
        </label>
        <label id="FlightNum">
          Flight No.
          <input
            type="text"
            onChange={event => this.handleFlightIdEntered(event)}
          />
        </label>
        <label id="From">
          From
          <input
            type="text"
            onChange={event => this.handleFlightFromEntered(event)}
          />
        </label>
        <label id="To">
          To
          <input
            type="text"
            onChange={event => this.handleFlightToEntered(event)}
          />
        </label>
        <label id="PlaneModel">
          Plane Model
          <input
            type="text"
            onChange={event => this.handlePlaneModelEntered(event)}
          />
        </label>
        <label id="Seats">
          Seats
          <input
            type="text"
            onChange={event => this.handleFlightSeatsEntered(event)}
          />
        </label> */}
        <a href="http://localhost:3005/flights/new">
          <button
            className="btn btn-primary"

            // onClick={() => this.handleFlightAdded()}
          >
            Create Flight
          </button>
        </a>

        <h4>Flights</h4>
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Flight</th>
                <th>From</th>
                <th>To</th>
                <th>Plane</th>
                <th>Seats</th>
              </tr>
            </thead>
            {flightElements}
          </Table>
        </Container>
      </div>
    );
  }
}

export default Flights;
