import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Visit from './components/visit/index';
import SignIn from './components/signIn/index';
import SignUp from './components/signUp/index';
import Admin from './components/adminNavigationBar/index';
import CreateTrain from './components/createTrain/index';
import ListTrain from './components/listTrain/index';
import EditTrain from './components/editTrain/index';
import DeleteTrain from './components/deleteTrain/index';
import SearchTrain from './components/searchTrain/index';
import ResultTrain from './components/resultTrain/index';
import BookTrain from './components/bookTrain/index';
import MyTicket from './components/myTicket/index';

export default class App extends Component {
  state = {
    userId: '',
    userEmail: '',
    userPassword: ''
  }

  isSignIn = (data) => {
    const { _id, email, password } = data;

    this.setState({
      userId: _id,
      userEmail: email,
      userPassword: password
    });
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <BrowserRouter>
            {/* Public Routes */}
            {/* <Route path="/" component={(prop) => <Visit {...prop} />} /> */}

            <Route path="/signUp" component={(prop) => <SignUp {...prop} />} />

            <Route path="/signIn" component={(prop) => <SignIn isSignIn={this.isSignIn} {...prop} />} />

            <Route path="/searchTrain" component={(prop) => <SearchTrain {...prop} />} />

            <Route path="/resultTrain/:from/:to" component={(prop) => <ResultTrain {...prop} />} />

            <Route path="/bookTrain/:trainNumber" component={(prop) => <BookTrain userId={this.state.userId} {...prop} />} />

            <Route path="/myTicket" component={(prop) => <MyTicket userId={this.state.userId} {...prop} />} />

            {/* Private Routes  */}
            <Route path="/admin" component={(prop) => <Admin {...prop} />} />

            <Route path="/createTrain" component={(prop) => <CreateTrain {...prop} />} />

            <Route path="/listTrain" component={(prop) => <ListTrain {...prop} />} />

            <Route path="/editTrain/:id" component={(prop) => <EditTrain {...prop} />} />

            <Route path="/deleteTrain/:id" component={(prop) => <DeleteTrain {...prop} />} />
          </ BrowserRouter>
        </div>
      </>
    )
  }
}
