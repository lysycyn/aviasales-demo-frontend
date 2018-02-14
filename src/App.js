import React, { Component } from 'react';
import Header from './Header';
import Popular from './Popular';
import Best from './Best';
import SpecialOffers from './SpecialOffers';
import Blog from './Blog';
import Mobile from './Mobile';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Popular />
        <Best />
        <SpecialOffers />
        <Blog />
        <Mobile />
        <Footer />
      </div>
    );
  }
}

export default App;
