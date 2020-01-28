import React, { Component, Fragment } from "react";
import axios from "axios";
import style from "../../style.module.css/signIn.style.css";
import { Redirect, Link } from "react-router-dom";

export default class SignIn extends Component {
  state = {
    email: [],
    confirmPassword: [],
    checkEmail: "",
    checkPassword: "",
    isUserExist: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/railwayReservationSystem/authentication")
      .then(response => {
        response.data.map(data => {
          return this.setState({
            email: [...this.state.email, data.email],
            confirmPassword: [
              ...this.state.confirmPassword,
              data.confirmPassword
            ]
          });
        });
      })
      .catch(error => error.message);
  }

  // check valid Email-ID
  checkEmail = () => {
    let email = this.state.email;
    let checkEmail = this.state.checkEmail;

    for (let i of email) {
      if (i === checkEmail ? true : false) return true;
    }
  };
  // check valid PasswordS
  checkPassword = () => {
    let confirmPassword = this.state.confirmPassword;
    let checkPassword = this.state.checkPassword;

    for (let j of confirmPassword) {
      if (j === checkPassword ? true : false) {
        return true;
      }
    }
  };

  handleEmail = event => {
    let { value } = event.target;
    if (value !== "") {
      this.setState({
        checkEmail: value
      });
    }
  };

  handlePassword = event => {
    let { value } = event.target;
    if (value !== "") {
      this.setState({
        checkPassword: value
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.checkEmail);
    console.log(this.state.email.map(data => data));
    // console.log(this.state.checkEmail === this.state.email.map(data => data));
    console.log(this.checkEmail());
    console.log(this.checkPassword());
    if (this.checkEmail() && this.checkPassword()) {
      window.alert("Congratulations!!! you are Logged-In");
      axios
        .get(
          "http://localhost:4000/todos/currentUser/" +
            this.state.checkEmail +
            "/" +
            this.state.checkPassword
        )
        .then(response => this.props.sendLoggedInUserData(response.data))
        .catch(error => console.log(error));
      this.setState({ checkEmail: "", checkPassword: "", isUserExist: true });
    } else {
      window.alert(" please!!!  Enter Valid Email-ID & Password");
    }
  };

  render() {
    if (this.state.isUserExist) {
      return <Redirect from={"/signIn"} to={"/userProfile"} />;
    }

    return (
      <Fragment>
        <div className={style.bgImageSignIN}>
          <br />
          <div className="d-flex justify-content-center">
            <div
              className={`card text-white bg-dark text-center ${style.card}`}
            >
              <div className="card-header">
                <h3>Sign In </h3>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <br />
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      aria-describedby="emailHelp"
                      placeholder=" email ID"
                      required
                      onChange={this.handleEmail}
                      value={this.state.checkEmail}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="password"
                      required
                      onChange={this.handlePassword}
                      value={this.state.checkPassword}
                    />
                  </div>

                  <button
                    type="submit"
                    value="sign in"
                    className="btn btn-dark btn-lg btn-block"
                  >
                    SIGN IN
                  </button>
                  <p>
                    You are Not Register Please {""}
                    <Link to="/signUp">SIGN-UP</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
