import React, { Component } from "react";
import axios from "axios";
import AdminNavigationBar from "../adminNavigationBar/index";
import { Redirect } from "react-router-dom";

export default class EditTrain extends Component {
  state = {
    trainNumber: "",
    trainName: "",
    from: "",
    to: "",
    totalSeat: "",
    fair: "",
    isTrainUpdated: false
  };
  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/railwayReservationSystem/editTrain/" +
          this.props.match.params.id
      )
      .then(response =>
        this.setState({
          trainNumber: response.data.trainNumber,
          trainName: response.data.trainName,
          from: response.data.from,
          to: response.data.to,
          totalSeat: response.data.totalSeat,
          fair: response.data.fair
        })
      )
      .catch(err => err.message);
  }

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

    const updateTrain = {
      trainNumber: this.state.trainNumber,
      trainName: this.state.trainName,
      from: this.state.from,
      to: this.state.to,
      totalSeat: this.state.totalSeat,
      fair: this.state.fair
    };

    axios
      .post(
        "http://localhost:4000/railwayReservationSystem/updateTrain/" +
          this.props.match.params.id,
        updateTrain
      )
      .then(response => response)
      .catch(error => error.message);

    window.alert("Train Updated successfully");
    this.setState({
      isTrainUpdated: true
    });
  };

  render() {
    if (this.state.isTrainUpdated) {
      return <Redirect to="/listTrain" />;
    }
    if (this.props.adminId === "") {
      return <Redirect to="/adminSignIn" />;
    }

    return (
      <div>
        {" "}
        <div>
          <AdminNavigationBar />
          <div className="d-flex justify-content-center">
            <div className="card bg-light mb-3">
              <div className="card-header">
                <h3 className="d-flex justify-content-center">Update Train</h3>
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
                        Update Train
                      </button>
                    </div>
                  </form>
                </h5>
              </div>
            </div>
          </div>
        </div>
        ); } }
      </div>
    );
  }
}
