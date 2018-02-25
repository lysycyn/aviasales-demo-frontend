import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Search from './Search';

import Header from './Header';
import Footer from './Footer';

export default () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Footer />
    </div>
  </Router>
);
