import React, { Component } from 'react';
import Header from './Header';
import Popular from './Popular';
import Best from './Best';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Popular />
        <Best />
      </div>
    );
  }
}

export default App;
