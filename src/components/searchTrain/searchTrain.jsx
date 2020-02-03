import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UserNavigationBar from "../userNavigationBar/index";
import axios from "axios";

export default class SearchTrain extends Component {
  state = {
    from: "",
    to: "",
    isStationNotSame: false,
    getStation: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/railwayReservationSystem/getStation")
      .then(response => this.setState({ getStation: response.data }))
      .catch(err => console.log(err.response));
  }

  handleFrom = event => {
    const { value } = event.target;
    if (value !== null && value !== "Select") {
      this.setState({ from: value });
    }
  };
  handleTo = event => {
    const { value } = event.target;
    if (value !== null && value !== "Select") {
      this.setState({ to: value });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.from !== this.state.to) {
      return this.setState({ isStationNotSame: true });
    }
    if (this.state.from === this.state.to) {
      //   this.setState({ isStationSame: true });
      window.alert("! Please select Valid or Different station");
      return this.props.history.push("/searchTrain");
    }
  };

  render() {
    if (this.state.isStationNotSame) {
      return (
        <Redirect
          to={"/resultTrain/" + this.state.from + "/" + this.state.to}
        />
      );
    }

    return (
      <div>
        <UserNavigationBar />
        <br />

        <div className="d-flex justify-content-center">
          <div className="card bg-light mb-3">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">
                Your Journey is Here
              </h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col">
                      <div className="form-row">
                        <div className="col">
                          <label htmlFor="inputState">From</label>
                          <select
                            id="from"
                            className="form-control"
                            onChange={this.handleFrom}
                            value={this.state.from}
                            required
                          >
                            <option value="Select">Select</option>
                            {this.state.getStation.map((station, key) => (
                              <option key={key} value={station}>
                                {station}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="col">
                          <label htmlFor="inputState">To</label>
                          <select
                            id="to"
                            className="form-control"
                            onChange={this.handleTo}
                            value={this.state.to}
                            required
                          >
                            <option value="Select">Select</option>
                            {this.state.getStation.map((station, key) => (
                              <option key={key} value={station}>
                                {station}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <br />
                      <div>
                        <button
                          type="submit"
                          value="createTicket"
                          className="btn btn-dark btn-lg btn-block"
                        >
                          Search Train
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
