import React, { Fragment } from "react";
// import "./Flights.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table, Container } from "react-bootstrap";
import { BACKEND_URL } from "../config";
class Airplanes extends React.Component {
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

    fetch(BACKEND_URL + "/airplanes.json") // this needs to go to /flights/:id/info.json
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
            <td>{flightList.id}</td>
            <td>{flightList.name}</td>
            <td>{flightList.rows}</td>
            <td>{flightList.columns}</td>
          </tr>
        </tbody>
      );
    });
    return (
      <div>
        <a href="http://localhost:3005/airplanes/new">
          <button className="btn btn-primary">Create Airplane</button>
        </a>
        <h4>Airplanes</h4>
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Rows</th>
                <th>Columns</th>
              </tr>
            </thead>
            {flightElements}
          </Table>
        </Container>
      </div>
    );
  }
}

export default Airplanes;
