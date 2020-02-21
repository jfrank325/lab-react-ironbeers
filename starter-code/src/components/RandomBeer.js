import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RandomBeer extends React.Component {
  state = {
    beer: '',
  };

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then(res => {
      this.setState({
        beer: res.data,
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.beer.image_url} alt="" />
        </div>
        <h1>{this.state.beer.name}</h1>
        <h3>{this.state.beer.taglin}</h3>
        <p>
          <b>{this.state.beer.first_brewed}</b>
        </p>
        <p>
          <strong>{this.state.beer.description}</strong>
        </p>
        <p>{this.state.beer.contributed_by}</p>
      </div>

      // return
      // (
    );
  }
}

export default RandomBeer;
