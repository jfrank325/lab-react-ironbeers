import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BeerDetails extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    const BeerId = this.props.match.params.beerId;
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${BeerId}`).then(res => {
      this.setState({
        beer: res.data,
      });
      console.log(res.data);
    });
  }
  render() {
    return (
      <div></div>
      // return
      // (
    );
  }
}

export default BeerDetails;
