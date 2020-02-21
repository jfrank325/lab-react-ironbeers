import React from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import BeerDetails from './BeerDetails';

class Beers extends React.Component {
  state = {
    allBeers: [],
  };
  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then(res => {
      this.setState({
        allBeers: res.data,
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="Beers-container">
        {this.state.allBeers.map(beer => {
          return (
            <Link to={`/beers/${beer._id}`}>
              <div className="beer-card">
                <div>
                  <img src={beer.image_url} alt="" />
                </div>
                <div>
                  <h1>{beer.name}</h1>
                  <h3>{beer.tagline}</h3>
                  <p>
                    <i>Created by: {beer.contributed_by}</i>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
        <Route path="/:beer_id" component={BeerDetails} />
      </div>
    );
  }
}

export default Beers;
