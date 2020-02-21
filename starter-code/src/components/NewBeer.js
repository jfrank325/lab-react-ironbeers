import React from 'react';
import { Link } from 'react-router-dom';

class NewBeer extends React.Component {
  render() {
    return (
      <header className="App-header">
        {' '}
        <Link className="App-logo" to="/">
          Home
        </Link>
      </header>
    );
  }
}

export default NewBeer;
