import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/user-setting-male.png";
import userProfileIcon from "../../assets/user-check.svg";
import searchTrainIcon from "../../assets/search (1).svg";
import myTicketIcon from "../../assets/book-open.svg";
import signOutIcon from "../../assets/log-out.svg";
import style from "../../style.module.css/admin.style.css";

export default class UserNavigationBar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
              <img
                src={logo}
                width="63"
                height="62"
                className="d-inline-block align-top"
                alt="user-logo"
              />
            </a>
            <a className="navbar-brand" href="/">
              <h2>User</h2>
            </a>

            <div className={`collapse  navbar-collapse  ${style.navIcons} `}>
              <ul className="navbar-nav  mx-auto">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;
                <li className="navbar-item">
                  <Link to="/userProfile" className="nav-link">
                    <img src={userProfileIcon} alt="userProfileIcon" />
                  </Link>
                </li>
                &nbsp; &nbsp;
                <li className="navbar-item">
                  <Link to="/myTicket" className="nav-link">
                    <img src={myTicketIcon} alt="myTicketIcon" />
                  </Link>
                </li>
                &nbsp; &nbsp;
                <li className="navbar-item">
                  <Link to="/searchTrain" className="nav-link">
                    <img src={searchTrainIcon} alt="searchTrainIcon" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="collapse  navbar-collapse ">
              <ul className="navbar-nav  ml-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    <img src={signOutIcon} alt="signOutIcon" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
