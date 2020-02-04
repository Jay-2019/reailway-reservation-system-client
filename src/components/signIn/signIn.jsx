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
    isSignIn: false,
    captcha: "",
    userInputCaptcha: ""
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

    this.handleCaptcha();
  }

  handleCaptcha = () => {
    const alphaNumericString =
      "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const captchaLength = 8;
    var randomString = "";
    for (let i = 0; i < captchaLength; i++) {
      var randomNumber = Math.floor(Math.random() * alphaNumericString.length);
      randomString += alphaNumericString.substring(
        randomNumber,
        randomNumber + 1
      );
    }

    var c = document.getElementById("captcha");
    var ctx = c.getContext("2d");

    ctx.font = "18px Georgia";
    ctx.font = "25px Verdana";
    // Create gradient
    let gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    // Fill with gradient
    ctx.fillStyle = gradient;
    ctx.fillText(randomString, 10, 25);
    this.setState({ captcha: randomString });
 
  };

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
    this.setState({
      checkEmail: value
    });
  };

  handlePassword = event => {
    let { value } = event.target;
    this.setState({
      checkPassword: value
    });
  };

  handleUserInputCaptcha = event => {
    const { value } = event.target;
    this.setState({ userInputCaptcha: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (
      this.checkEmail() &&
      this.checkPassword() &&
      this.state.captcha === this.state.userInputCaptcha
    ) {
      axios
        .get(
          "http://localhost:4000/railwayReservationSystem/currentUser/" +
            this.state.checkEmail +
            "/" +
            this.state.checkPassword
        )
        .then(response => this.props.isSignIn(response.data))
        .catch(error => console.log(error.message));

      //reSet State properties
      this.setState({
        checkEmail: "",
        checkPassword: "",
        isSignIn: true
      });
    } else {
      window.alert(" please!!!  Enter Valid Email-ID & Password & Captcha");
    }
  };

  render() {
    if (this.state.isSignIn) {
      return <Redirect to={"/searchTrain"} />;
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

                  <div className="row">
                    <canvas
                      id="captcha"
                      width="200"
                      height="30"
                      className={`col ${style.captcha}`}
                    ></canvas>

                    <div className="col">
                      <label htmlFor="fillCaptcha"> Fill Captcha</label>
                      <input
                        type="name"
                        className="form-control"
                        id="userInputCaptcha"
                        onChange={this.handleUserInputCaptcha}
                        value={this.state.userInputCaptcha}
                        required
                      />
                    </div>
                  </div>

                  {/* <div className="form-row">
                   

                    <div className="col">
                      <label htmlFor="trainNumber">Captcha</label>
                      <input
                        type="name"
                        className="form-control"
                        id="captcha"
                        value={this.state.captcha}
                        readOnly
                      />
                      <canvas
                        id="captcha"
                        width="200"
                        height="370"
                        className={style.captcha}
                      ></canvas>
                    </div>
                    <div className="col">
                      <label htmlFor="captcha"> Fill Captcha</label>
                      <input
                        type="name"
                        className="form-control"
                        id="userInputCaptcha"
                        onChange={this.handleUserInputCaptcha}
                        value={this.state.userInputCaptcha}
                        required
                      />
                    </div>
                  </div> */}
                  <br />
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
