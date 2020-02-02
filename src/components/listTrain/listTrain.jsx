import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminNavigationBar from "../adminNavigationBar/index";
import deleteIcon from "../../assets/trash-2 (1).svg";
import editIcon from "../../assets/edit (1).svg";

const Train = props => (
  <tr className="table-info">
    <td>{props.train.trainNumber}</td>
    <td>{props.train.trainName}</td>
    <td>{props.train.from}</td>
    <td>{props.train.to}</td>
    <td>{props.train.totalSeat}</td>
    <td>{props.train.fair}</td>
    <td>
      <Link to={"/editTrain/" + props.train._id}>
        <img src={editIcon} alt="edit icon" />
      </Link>
      &nbsp; &nbsp; &nbsp;
      <Link to={"/deleteTrain/" + props.train._id}>
        <img src={deleteIcon} alt="delete icon" />
      </Link>
    </td>
    <td>{new Date(props.train.createdAt).toLocaleDateString("en-GB")}</td>
    <td>{new Date(props.train.updatedAt).toLocaleDateString("en-GB")}</td>
  </tr>
);

export default class ListTrain extends Component {
  state = {
    train: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/railwayReservationSystem/listTrain")
      .then(response => {
        this.setState({ train: response.data });
        console.log(this.state.train);
      })
      .catch(error => error.message);
  }

  listTrain = () => {
    return this.state.train.map((currentTrain, index) => {
      return <Train train={currentTrain} key={index} />;
    });
  };

  render() {
    return (
      <div>
        <AdminNavigationBar />
        <h1> Train List </h1>
        <p>Refresh for Recent Updates </p>
        <table className="table table-hover table-striped table-info">
          <thead>
            <tr className="table-danger">
              <th>Train Number</th>
              <th>Train Name</th>
              <th>From</th>
              <th>To</th>
              <th>Seat</th>
              <th>Fair</th>
              <th>Action</th>
              <th>Create At</th>
              <th>Last Update</th>
            </tr>
          </thead>
          <tbody>{this.listTrain()}</tbody>
        </table>
      </div>
    );
  }
}
