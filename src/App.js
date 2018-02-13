import React, { Component } from 'react';
import Header from './Header';
import Popular from './Popular';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Popular />
      </div>
    );
  }
}

export default App;
