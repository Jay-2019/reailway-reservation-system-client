import React, { Component, Fragment } from "react";
import axios from "axios";
import style from "../../style.module.css/signUp.style.css";
import { Redirect } from "react-router-dom";

export default class SignUp extends Component {
  state = {
    userName: "",
    gender: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
    termsAndConditions: false,
    isIncorrectPassword: false,
    isSignUp: false
  };

  handleUserName = event => {
    const { value } = event.target;
    if (value.match("^[a-zA-Z ]*$") != null) {
      this.setState({ userName: value.toUpperCase() });
    }
  };

  handleGender = event => {
    const { value, id } = event.target;
    if (value === id) {
      this.setState({ gender: value });
    }
  };

  handleEmail = event => {
    const { value } = event.target;
    this.setState({ email: value });
  };

  handleCreatePassword = event => {
    const { value } = event.target;
    this.setState({ createPassword: value });
  };

  handleConfirmPassword = event => {
    const { value } = event.target;
    this.setState({ confirmPassword: value });
  };

  handleTermsAndConditions = event => {
    const { id, name } = event.target;
    if (name === id) {
      this.setState({ termsAndConditions: !this.state.termsAndConditions });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.createPassword !== this.state.confirmPassword) {
      window.alert("Create & Confirm Password not Matched");
    }

    // Creating newUser Object...
    const newUser = {
      userName: this.state.userName,
      gender: this.state.gender,
      email: this.state.email,
      createPassword: this.state.createPassword,
      confirmPassword: this.state.confirmPassword,
      termsAndConditions: this.state.termsAndConditions
    };

    // send data into database
    axios
      .post("http://localhost:4000/railwayReservationSystem/signUp", newUser)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => error.message);

    this.setState({
      userName: "",
      gender: "",
      email: "",
      createPassword: "",
      confirmPassword: "",
      termsAndConditions: false,
      signUpDate: Date.now,
      isSignUp: true
    });
  };

  render() {
    if (this.state.isSignUp) {
      return <Redirect to="/signIn" />;
    }

    return (
      <Fragment>
        <div className=" p-3 mb-2  text-dark">
          <div className="d-flex justify-content-center">
            <div className={`card bg-secondary ${style.card}`}>
              <div className="card-header">
                <div className="d-flex justify-content-center">
                  <h3>Sign Up </h3>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="inputUserName"
                      aria-describedby="userNameHelp"
                      placeholder="user_name"
                      value={this.state.userName}
                      onChange={this.handleUserName}
                      required
                      //
                    />
                  </div>

                  <div className="form-group form-check ">
                    <div className="row">
                      <div className="col">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="genderOptions"
                          id="male"
                          value="male"
                          required
                          // checked={this.state.gender.match('male')}
                          checked={this.state.gender === "male"}
                          onChange={this.handleGender}
                        />
                        <label className="form-check-label">Male</label>
                      </div>

                      <div className="col">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="genderOptions"
                          id="female"
                          value="female"
                          required
                          // checked={this.state.gender.match('female')}
                          checked={this.state.gender === "female"}
                          onChange={this.handleGender}
                        />
                        <label className="form-check-label">Female</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group ">
                    <input
                      type="email"
                      className="form-control "
                      id="inputEmail"
                      aria-describedby="emailHelp"
                      placeholder=" email"
                      value={this.state.email}
                      onChange={this.handleEmail}
                      required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="inputCreatePassword"
                      placeholder="create password"
                      value={this.state.createPassword}
                      onChange={this.handleCreatePassword}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="inputConfirmPassword"
                      placeholder="confirm password"
                      value={this.state.confirmPassword}
                      onChange={this.handleConfirmPassword}
                      required
                    />
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="termsAndConditions"
                      name="termsAndConditions"
                      value="termsAndConditions"
                      // checked={this.state.termsAndConditions.match(true)}
                      checked={this.state.termsAndConditions === true}
                      onChange={this.handleTermsAndConditions}
                      required
                      //
                    />
                    <label
                      className="form-check-label"
                      htmlFor="termsAndCondition"
                    >
                      I agree to the terms and conditions
                    </label>
                  </div>
                  <button
                    type="submit"
                    value="sign up"
                    className="btn btn-dark btn-lg btn-block"
                  >
                    SIGN UP
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
