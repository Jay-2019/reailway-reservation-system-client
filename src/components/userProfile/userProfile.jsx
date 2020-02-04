import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

export default class UserProfile extends Component {
  componentDidMount() {
    Axios.get(
      "http://localhost:4000/railwayReservationSystem/getMyProfile/" +
        this.props.userId
    )
      .then(response => console.log(response.data))
      .catch(err => console.log(err.message));
  }

  render() {
    if (this.props.userId === "") {
      return <Redirect to="/signIn" />;
    }
    return (
      <div className="d-flex justify-content-center">
        <div className="card bg-light mb-3">
          <div className="card-header">
            <h3 className="d-flex justify-content-center">My Profile</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <form>
                <div className="form-row">
                  <div className="col ">
                    <h3 className="d-flex justify-content-center">
                      <b> {this.props.userName}</b>
                    </h3>
                  </div>

                  <hr />
                  <br />
                  <div className="col">
                    <h3 className="d-flex justify-content-center">
                      <b> {this.props.userGender}</b>
                    </h3>
                  </div>
                </div>

                <hr />
                <div className="form-row">
                  <div className="col">
                    <h3 className="d-flex justify-content-center">
                      <b> {this.props.userEmail}</b>
                    </h3>
                  </div>

                  <hr />
                  <br />
                  <div className="col">
                    <h3 className="d-flex justify-content-center">
                      <b> {this.props.userPassword}</b>
                    </h3>
                  </div>
                </div>

                <hr />
                <br />
                <div>
                  <button
                    type="button"
                    className="btn btn-dark btn-lg btn-block"
                    onClick={this.handleAddPassengerForm}
                  >
                    Edit My Profile
                  </button>
                </div>
              </form>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
