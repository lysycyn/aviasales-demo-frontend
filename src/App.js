import React, { Component } from 'react';
import Header from './Header';
import Popular from './Popular';
import Best from './Best';
import SpecialOffers from './SpecialOffers';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Popular />
        <Best />
        <SpecialOffers />
      </div>
    );
  }
}

export default App;
