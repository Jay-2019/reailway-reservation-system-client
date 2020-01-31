import React, { Component } from "react";
import axios from "axios";

export default class BookTrain extends Component {
  state = {};
  componentDidMount = () => {
    axios
      .get(
        "http://localhost:4000/railwayReservationSystem/bookTrain/" +
          this.props.match.params.trainNumber
      )
      .then(response => console.log(response.data))
      .catch(error => console.log(error.message));
  };
  render() {
    return <div></div>;
  }
}
