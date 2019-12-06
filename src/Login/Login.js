import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Search from "../Search/Search";
import { Button } from "react-bootstrap";

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
    loggedIn: false
  };
  handleLogin() {
    this.setState({ loggedIn: true });
  }
  handleLogout() {
    this.setState({ loggedIn: false });
  }
  render() {
    return (
      <div className="homepage">
        {this.state.loggedIn && (
          <div>
            <h1>Welcome Back, admin/user!</h1>
            <h3>Your flights details:</h3>
            {/* <Search /> */}
            <Button class="btn btn-primary" onClick={() => this.handleLogout()}>
              Logout
            </Button>
          </div>
        )}
        {!this.state.loggedIn && (
          <div>
            <h1>Please Login or Signup</h1>
            <h4>Email Address</h4>
            <input type="text" placeholder="Your Email Address"></input>
            <h4>Password</h4>
            <input type="text" placeholder="Your Password"></input>
            <br />
            <Button class="btn btn-primary" onClick={() => this.handleLogin()}>
              Login
            </Button>
            <Button class="btn btn-primary" onClick={() => this.handleLogin()}>
              Signup
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
