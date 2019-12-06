import React from "react";
import "./Navi.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
class Navi extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="./brand">GA Airlines</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="http://localhost:3005/airplanes/new">
              Airplanes
            </Nav.Link>
            <Nav.Link href="/flights">Flights</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navi;
