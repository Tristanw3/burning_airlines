import React, { Fragment } from "react";
import "./Login.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Search from "../Search/Search";
import { Button, Container, Table, Navbar, Nav } from "react-bootstrap";
import { BACKEND_URL } from "../config";

class Login extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <LoginCheck />
      </div>
    );
  }
}

class LoginCheck extends React.Component {
  state = {
    userList: [],
    loggedIn: false
  };
  // componentDidMount() {
  //   let self = this;

  //   fetch(BACKEND_URL + "/users.json") // this needs to go to /flights/:id/info.json
  //     .then(response => response.json())
  //     .then(json => {
  //       self.setState(state => {
  //         console.log("json :", json);

  //         return {
  //           ...state,
  //           userList: [...json]
  //         };
  //       });
  //     });
  // }
  handleLogin() {
    // const value = event.target.value;
    this.setState({ loggedIn: true });
  }
  handleLogout() {
    this.setState({ loggedIn: false });
  }
  render() {
    // const airplaneElements = this.state.airplaneList.map(airplaneList => {
    //   return (
    //     // <Fragment>
    //     <tbody key={airplaneList.id}>
    //       <tr>
    //         <td>{airplaneList.id}</td>
    //         <td>{airplaneList.name}</td>
    //         <td>
    //           {airplaneList.columns}*{airplaneList.rows}
    //         </td>
    //       </tr>
    //     </tbody>
    //     // </Fragment>
    //   );
    // });

    return (
      <div className="homepage">
        {this.state.loggedIn && (
          <div>
            {/* <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="./brand">GA Airlines</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="http://localhost:3005/airplanes/new">
                  Airplanes
                </Nav.Link>
                <Nav.Link href="/flights">Flights</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
              </Nav>
            </Navbar> */}
            <h1>Welcome Back, admin/user!</h1>
            <h3>Current flights details:</h3>
            {/* <Search /> */}
            {/* <Container>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Plane Model</th>
                    <th>Seats</th>
                  </tr>
                </thead>
                {airplaneElements}
              </Table>
            </Container> */}
            <Button
              className="btn btn-primary"
              onClick={() => this.handleLogout()}
            >
              Logout
            </Button>
          </div>
        )}
        {!this.state.loggedIn && (
          <Fragment>
            {/* <div>
              <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="./brand">GA Airlines</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav>
              </Navbar>
            </div> */}

            <div>
              <h1>Please Login or Signup</h1>
              <h4>Email Address</h4>
              <input type="text" placeholder="Your Email Address"></input>
              <h4>Password</h4>
              <input type="text" placeholder="Your Password"></input>
              <br />
              <Button
                className="btn btn-primary"
                onClick={() => this.handleLogin()}
              >
                Login
              </Button>
              <Button
                className="btn btn-primary"
                onClick={() => this.handleLogin()}
              >
                Signup
              </Button>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Login;
