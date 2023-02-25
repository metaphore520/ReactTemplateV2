import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class Body extends Component {
  state = {};
  render() {
    return this.props.children;
  }
}

export default Body;
