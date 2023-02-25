import React, { Component } from "react";
import { API } from "../Variable";

class Employee extends Component {
  state = {
    countries: [],
  };

  refreshList() {
    fetch(API.API_URL + API.getAllCountry)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ countries: data });
      });
    // fetch(API.API_URL + API.getAllCountry).then((response) =>
    //   console.log(response)
    // );
  }
  componentDidMount() {
    this.refreshList();
  }
  render() {
    const { countries } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Country Name</th>
            <th>Country Code</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((data) => (
            <tr>
              <td>{data.Id}</td>
              <td>{data.Name}</td>
              <td>{data.CountryCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Employee;
