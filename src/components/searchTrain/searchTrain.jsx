import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UserNavigationBar from "../userNavigationBar/index";

export default class SearchTrain extends Component {
  state = {
    from: "",
    to: "",
    isStationNotSame: false
  };

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
                          <option value="Delhi">Delhi</option>
                          <option value="Kanpur">Kanpur</option>
                          <option value="Chitrakoot">Chitrakoot</option>
                          <option value="Lucknow">Lucknow</option>
                          <option value="Allahabad">Allahabad</option>
                          <option value="Gwalior">Gwalior</option>
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
                          <option value="Delhi">Delhi</option>
                          <option value="Kanpur">Kanpur</option>
                          <option value="Chitrakoot">Chitrakoot</option>
                          <option value="Lucknow">Lucknow</option>
                          <option value="Allahabad">Allahabad</option>
                          <option value="Gwalior">Gwalior</option>
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
