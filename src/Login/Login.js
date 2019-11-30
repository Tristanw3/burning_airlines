import React from "react";
import "./Login.css";

import Airplanes from "../Airplanes/Airplanes";

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
      <div>
        {this.state.loggedIn && (
          <div>
            <h3>Welcome, admin/user!</h3>
            <a href="./search">Search Flights</a>
            <Airplanes />
            <button onClick={() => this.handleLogout()}>Logout</button>
          </div>
        )}
        {!this.state.loggedIn && (
          <div>
            <h3>Please login or signup</h3>
            <h4>Email address</h4>
            <input type="text" placeholder="Your Email Address"></input>
            <h4>Password</h4>
            <input type="text" placeholder="Your Password"></input>
            <br />
            <button onClick={() => this.handleLogin()}>Login</button>
            <button onClick={() => this.handleLogin()}>Signup</button>
          </div>
        )}
      </div>
    );
  }
}

// class PlaneList extends React.Component {
//   state = {
//     planeList: [],
//     planeItem: ""
//   };
//   handleValueEntered(event) {
//     const newPlaneItem = event.target.value;
//     console.log(">>>>>>>>>>" + newPlaneItem);
//     this.setState(state => ({ ...state, planeItem: newPlaneItem }));
//   }
//   handlePlaneAdded() {
//     this.setState(state => {
//       const newPlaneList = [...state.planeList, state.planeItem];
//       return { ...state, planeList: newPlaneList };
//     });
//     // console.log("click");
//   }

//   render() {
//     const planeElements = this.state.planeList.map((planeItem, index) => (
//       <li key={index}>{planeItem}</li>
//     ));
//     return (
//       <div>
//         <h2>GA Airlines</h2>
//         <input type="text" onChange={event => this.handleValueEntered(event)} />
//         <button onClick={() => this.handlePlaneAdded()}>Create Plane</button>
//         <ul>{planeElements}</ul>
//       </div>
//     );
//   }
// }

export default Login;
