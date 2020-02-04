import React, { Component } from "react";
import { Card } from "react-bootstrap";
import visitImage from "../../assets/pexels-photo-325200.jpeg";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/adminSignIn">
            |ADMIN|
          </Link>
          <div className="collapse  navbar-collapse ">
            <ul className="navbar-nav  ml-auto">
              <li className="navbar-item">
                <Link className="navbar-brand" to="/signIn">
                  |USER|
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Card.Img src={visitImage} alt="Card image" />
      </div>
    );
  }
}
