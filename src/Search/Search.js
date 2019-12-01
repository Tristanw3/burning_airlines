import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Container,
  Navbar,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import "./Search.css";

class Search extends React.Component {
  state = {
    flightList: [
      {
        flightDate: "24/12/2019",
        flightId: "GA001",
        flightFrom: "SYD",
        flightTo: "MEL",
        flightModel: 747,
        flightSeats: 32
      },
      {
        flightDate: "25/12/2019",
        flightId: "GA002",
        flightFrom: "MEL",
        flightTo: "SYD",
        flightModel: 747,
        flightSeats: 32
      },
      {
        flightDate: "26/12/2019",
        flightId: "GA003",
        flightFrom: "SYD",
        flightTo: "MEL",
        flightModel: 737,
        flightSeats: 56
      }
    ],
    flightDate: [],
    flightId: [],
    flightFrom: [],
    flightTo: [],
    flightModel: [],
    flightSeats: []
  };
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
  handleSearch(event) {
    this.setState({ search: event.target.value });

    console.log(event.target.value);
    console.log(this.state.flightList);
  }
  render() {
    const flightElements = this.state.flightList.map((flightList, index) => {
      return (
        <tbody key={index}>
          <tr>
            <td>{flightList.flightDate}</td>
            <td>
              <a href="./seats">{flightList.flightId}</a>
            </td>
            <td>{flightList.flightFrom}</td>
            <td>{flightList.flightTo}</td>
            <td>{flightList.flightModel}</td>
            <td>{flightList.flightSeats}</td>
          </tr>
        </tbody>
      );
      //   <li key={index}>{flightList.flightId}</li>;
    });
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={event => this.handleSearch(event)}
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
        <div className="hidden">
          <h2>Add Flights</h2>
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
          </label>
          <button onClick={() => this.handleFlightAdded()}>
            Create Flight
          </button>
        </div>

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

export default Search;
