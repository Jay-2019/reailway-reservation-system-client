import React, { Component } from "react";
import AdminNavigationBar from "../adminNavigationBar/index";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class CreateTrain extends Component {
  state = {
    trainNumber: "",
    trainName: "",
    from: "",
    to: "",
    totalSeat: "",
    fair: "",
    isTrainCreated: false
  };

  componentDidMount() {
    this.calculateTrainNumber();
  }

  calculateTrainNumber = () => {
    const trainNumber = Math.floor(Math.random() * 10000) + 10000;
    this.setState({ trainNumber: trainNumber });
  };

  handleTrainName = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ trainName: value.toUpperCase() });
    }
  };

  handleFrom = event => {
    const { value } = event.target;
    this.setState({ from: value.toUpperCase() });
  };

  handleTo = event => {
    const { value } = event.target;
    this.setState({ to: value.toUpperCase() });
  };

  handleTotalSeat = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ totalSeat: value });
    }
  };

  handleFair = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ fair: value });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    const newTicket = {
      trainNumber: this.state.trainNumber,
      trainName: this.state.trainName,
      from: this.state.from,
      to: this.state.to,
      totalSeat: this.state.totalSeat,
      fair: this.state.fair
    };

    axios
      .post(
        "http://localhost:4000/railwayReservationSystem/createTrain",
        newTicket
      )
      .then(response => response)
      .catch(error => error.message);

    window.alert("ticket created successfully");
    this.setState({
      trainNumber: "",
      trainName: "",
      from: "",
      to: "",
      totalSeat: "",
      fair: "",
      isTrainCreated: true
    });
  };
  render() {
    if (this.state.isTrainCreated) {
      return <Redirect to="/listTrain" />;
    }
    console.log(this.props.adminId === "");
    if (this.props.adminId === "") {
      return <Redirect to="/adminSignIn" />;
    }

    return (
      <div>
        <AdminNavigationBar />
        <div className="d-flex justify-content-center">
          <div className="card bg-light mb-3">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">Create Ticket</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="trainNumber">Train Number</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainNumber"
                        value={this.state.trainNumber}
                        readOnly
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="trainName">Train Name</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handleTrainName}
                        value={this.state.trainName}
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="inputState">From</label>
                      <input
                        id="from"
                        className="form-control"
                        onChange={this.handleFrom}
                        value={this.state.from}
                        required
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="inputState">To</label>
                      <input
                        id="to"
                        className="form-control"
                        onChange={this.handleTo}
                        value={this.state.to}
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="inputState">Total Seat</label>
                      <input
                        type="name"
                        className="form-control"
                        id="totalSeat"
                        pattern="[0-9]*"
                        onChange={this.handleTotalSeat}
                        value={this.state.totalSeat}
                        required
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="inputState">Total Fair</label>
                      <input
                        type="name"
                        className="form-control"
                        id="fair"
                        onChange={this.handleFair}
                        value={this.state.fair}
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div>
                    <button
                      type="submit"
                      value="createTicket"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Create Ticket
                    </button>
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
