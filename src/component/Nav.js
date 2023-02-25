import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from  '../logo.svg'

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item m-1">
            <img src={logo} className="App-logo" alt="logo" />
          </li>
          <li className="nav-item m-1">
            <Link to="/home" className="btn btn-light btn-outline-primary">
              Home
            </Link>
          </li>
          <li className="nav-item m-1">
            <Link
              to="/department"
              className="btn btn-light btn-outline-primary"
            >
              Department
            </Link>
          </li>
          <li className="nav-item m-1">
            <Link to="/employee" className="btn btn-light btn-outline-primary">
              Employee
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
