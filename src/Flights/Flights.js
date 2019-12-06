import React from "react";
import "./Flights.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container } from "react-bootstrap";
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
    flightList: []
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

  render() {
    const flightElements = this.state.flightList.map((flightList, index) => {
      return (
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
    });
    return (
      <div>
        <a href="http://localhost:3005/flights/new">
          <button className="btn btn-primary">Create Flight</button>
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
