import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Visit from './components/visit/index';
import SignIn from './components/signIn/index';
import SignUp from './components/signUp/index';
// import Admin from './components/adminNavigationBar/index';
import CreateTrain from './components/createTrain/index';
import ListTrain from './components/listTrain/index';
import EditTrain from './components/editTrain/index';
import DeleteTrain from './components/deleteTrain/index';
import SearchTrain from './components/searchTrain/index';
import ResultTrain from './components/resultTrain/index';
import BookTrain from './components/bookTrain/index';
import MyTicket from './components/myTicket/index';
import UserProfile from './components/userProfile/index';
import AdminSignUp from './components/adminSignUp/index';
import AdminSignIn from './components/adminSignIn/index';
import Home from './components/home';

export default class App extends Component {
  state = {
    userId: '',
    userName: '',
    userEmail: '',
    userGender: '',
    userPassword: '',
    adminId: '',
    adminName: '',
    adminEmail: '',
    adminPassword: ''
  }

  isSignIn = (data) => {
    const { _id, userName, email, gender, confirmPassword } = data;

    this.setState({
      userId: _id,
      userName: userName,
      userEmail: email,
      userGender: gender,
      userPassword: confirmPassword,

    });
  };

  isAdminSignIn = (data) => {
    const { _id, userName, email, password } = data;
    this.setState({
      adminId: _id,
      adminName: userName,
      adminEmail: email,
      adminPassword: password
    });
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <BrowserRouter>

            {/* Public Routes */}
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/signUp" component={(prop) => <SignUp {...prop} />} />

            <Route path="/signIn" component={(prop) => <SignIn isSignIn={this.isSignIn} {...prop} />} />

            <Route path="/userProfile" component={(prop) => <UserProfile
              userId={this.state.userId}
              userName={this.state.userName}
              userGender={this.state.userGender}
              userEmail={this.state.userEmail}
              userPassword={this.state.userPassword}
              {...prop} />} />

            <Route path="/searchTrain" component={(prop) => <SearchTrain {...prop} />} />

            <Route path="/resultTrain/:from/:to" component={(prop) => <ResultTrain {...prop} />} />

            <Route path="/bookTrain/:trainNumber" component={(prop) => <BookTrain userId={this.state.userId} {...prop} />} />

            <Route path="/myTicket" component={(prop) => <MyTicket userId={this.state.userId} {...prop} />} />

            {/* Private Routes  */}

            <Route path="/adminSignUp" component={(prop) => <AdminSignUp {...prop} />} />

            <Route path="/adminSignIn" component={(prop) => <AdminSignIn isAdminSignIn={this.isAdminSignIn} {...prop} />} />

            <Route path="/createTrain" component={(prop) => <CreateTrain adminId={this.state.adminId} {...prop} />} />

            <Route path="/listTrain" component={(prop) => <ListTrain {...prop} />} />

            <Route path="/editTrain/:id" component={(prop) => <EditTrain adminId={this.state.adminId} {...prop} />} />

            <Route path="/deleteTrain/:id" component={(prop) => <DeleteTrain {...prop} />} />
          </ BrowserRouter>
        </div>
      </>
    )
  }
}
