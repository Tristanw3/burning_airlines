import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Form, FormControl } from "react-bootstrap";
import FlightsList from "../Flights/FlightsList";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      filteredFlights: [],
      search: ""
    };
  }

  handleSearch(event) {
    this.setState({ search: event.target.value });

    console.log(event.target.value);
  }

  render() {
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

        <FlightsList />
      </div>
    );
  }
}

export default Search;
