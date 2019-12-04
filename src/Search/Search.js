import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container } from "react-bootstrap";
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
    flightFrom: "",
    flightTo: "",
    filteredFlights: [],
    isSearching: false
  };

  handleFlightFromEntered(event) {
    const newFlightFrom = event.target.value.toUpperCase();
    this.setState({ flightFrom: newFlightFrom });
  }
  handleFlightToEntered(event) {
    const newFlightTo = event.target.value.toUpperCase();
    this.setState({ flightTo: newFlightTo });
  }

  handleSearchFlight() {
    const flightSearchString = this.state.flightFrom + this.state.flightTo;
    console.log("flightSearchString :", flightSearchString);
    const filteredFlights = this.state.flightList.filter(flight => {
      const thisFlightsString = flight.flightFrom + flight.flightTo;
      return thisFlightsString === flightSearchString;
    });

    // this.setState({ filteredFlights: filteredFlights });
    this.setState({
      filteredFlights: filteredFlights,
      isSearching: true
    });
  }
  handleCancelSearch() {
    this.setState({
      isSearching: false
    });
  }
  render() {
    const flightElements = this.state.filteredFlights.map(flightList => {
      return (
        <Fragment>
          <tbody id="myTable" key={flightList.id}>
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
        </Fragment>
      );
    });

    return (
      <div>
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
        <button onClick={() => this.handleSearchFlight()}>
          Search Flights
        </button>
        <button onClick={() => this.handleCancelSearch()}>Cancel</button>
        <div>
          {this.state.isSearching && (
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
          )}
          {!this.state.isSearching && (
            <div>
              <h3>Begin your search</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
