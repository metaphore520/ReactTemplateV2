import React, { Component } from "react";
import { API } from "../Variable";

class Employee extends Component {
  state = {
    countries: [],
    countryToAdd: {
      Name: "Place...",
      CountryCode: 0,
    },
  };

  NameChanged = (value) => {
    this.setState({ countryToAdd: { ...this.state.countryToAdd, Name: value } });
  };
  CountryCodeChanged = (value) => {
    this.setState({ countryToAdd: { ...this.state.countryToAdd,CountryCode: value } });
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
  createStudent = () => {
    fetch(API.API_URL + API.postCountry, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
       this.state.countryToAdd,
      ),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          console.log(error);
          alert("Failed");
        }
      );
  };

  componentDidMount() {
    this.refreshList();
  }
  render() {
    const { countries } = this.state;
    return (
      <>
        <div className="row">
          <div className="col-md-2">
            <label>Name : </label>
          </div>
          <div className="col-md-2">
            <input
              type="text"
              value={this.state.countryToAdd.Name}
              onChange={(e) => this.NameChanged(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <label>Country Code : </label>
          </div>
          <div className="col-md-2">
            <input
              type="text"
              value={this.state.countryToAdd.CountryCode}
              onChange={(e) => this.CountryCodeChanged(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button onClick={() => this.createStudent()}>Save Student</button>
          </div>
        </div>

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
              <tr key={data.Id}>
                <td>{data.Id}</td>
                <td>{data.Name}</td>
                <td>{data.CountryCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Employee;
