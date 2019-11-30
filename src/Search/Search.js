import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Form, FormControl, Nav } from "react-bootstrap";
class Search extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Search;
