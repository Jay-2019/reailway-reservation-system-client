import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/admin-settings-male.png";
import adminProfileIcon from "../../assets/user-check.svg";
import createTrainIcon from "../../assets/file-plus.svg";
import trainListIcon from "../../assets/book-open.svg";
import signOutIcon from "../../assets/log-out.svg";
import style from "../../style.module.css/admin.style.css";

export default class AdminNavigationBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              width="63"
              height="62"
              className="d-inline-block align-top"
              alt="admin-logo"
            />
          </a>
          <a className="navbar-brand" href="/">
            <h2>Admin</h2>
          </a>
          {/* <Link to="/" className="navbar-brand">
            <h2 className="navbar-brand">Admin</h2>
          </Link> */}

          <div className={`collapse  navbar-collapse ${style.navIcons} `}>
            <ul className="navbar-nav  mx-auto">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;
              <li className="navbar-item">
                <Link to="/adminProfile" className="nav-link">
                  <img src={adminProfileIcon} alt="adminProfileIcon" />
                </Link>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <li className="navbar-item">
                <Link to="/listTrain" className="nav-link">
                  <img src={trainListIcon} alt="trainListIcon" />
                </Link>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <li className="navbar-item">
                <Link to="/createTrain" className="nav-link">
                  <img src={createTrainIcon} alt="createTrainIcon" />
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
    );
  }
}
