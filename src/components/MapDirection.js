/*global google*/
import React, { Component } from "react";
import { DirectionsRenderer } from "react-google-maps";

class MapDirection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: null
    };
  }

  componentDidMount() {
    var directionService = new google.maps.DirectionsService();
    console.log(this.props.origin);
    console.log(this.props.destination);
    directionService.route(
      {
        origin: this.props.origin,
        destination: this.props.destination,
        travelMode: "DRIVING"
      },
      (result, status) => {
        if (status === "OK") {
          console.log(result);
          this.setState({
            directions: result
          });
        } else {
          console.log("error");
        }
      }
    );
  }

  render() {
    return (
      <DirectionsRenderer
        directions={this.state.directions}
      ></DirectionsRenderer>
    );
  }
}

export default MapDirection;
