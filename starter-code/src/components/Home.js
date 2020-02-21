import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Beers from './Beers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import BeerDetails from './BeerDetails';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1>IRONBEERS</h1>
        <Link to="/">Home</Link>
        <Link to="/beers">Beers</Link>
        <Link to="/random-beer">Find A Random Beer</Link>
        <Link to="/new-beer">Post A New Beer</Link>
        <Switch>
          <Route exact path="/beers" component={Beers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/beers/:beerId" component={BeerDetails} />
        </Switch>
      </div>
    );
  }
}

export default Home;
