import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/signIn/index';
import SignUp from './components/signUp/index';

export default class App extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <BrowserRouter>
            <div className="container-fluid ">

            </div>
            <Route path="/signUp" component={(prop) => <SignUp {...prop} />} />
            <Route path="/signIn" component={(prop) => <SignIn {...prop} />} />
          </ BrowserRouter>
        </div>
      </>
    )
  }
}
