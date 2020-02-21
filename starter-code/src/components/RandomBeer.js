import React from 'react';
import { Link } from 'react-router-dom';

class RandomBeer extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Link className="App-logo" to="/"></Link>
      </header>
    );
  }
}

export default RandomBeer;
