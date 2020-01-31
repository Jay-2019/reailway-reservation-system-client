import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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

export default class App extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <BrowserRouter>

            <Route path="/signUp" component={(prop) => <SignUp {...prop} />} />
            <Route path="/signIn" component={(prop) => <SignIn {...prop} />} />
            <Route path="/admin" component={(prop) => <Admin {...prop} />} />
            <Route path="/createTrain" component={(prop) => <CreateTrain {...prop} />} />
            <Route path="/listTrain" component={(prop) => <ListTrain {...prop} />} />
            <Route path="/editTrain/:id" component={(prop) => <EditTrain {...prop} />} />
            <Route path="/deleteTrain/:id" component={(prop) => <DeleteTrain {...prop} />} />
            <Route path="/searchTrain" component={(prop) => <SearchTrain {...prop} />} />
            <Route path="/resultTrain/:from/:to" component={(prop) => <ResultTrain {...prop} />} />
            <Route path="/bookTrain/:trainNumber" component={(prop) => <BookTrain {...prop} />} />


          </ BrowserRouter>
        </div>
      </>
    )
  }
}
