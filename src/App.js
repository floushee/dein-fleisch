import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import RestaurantMap from './components/RestaurantMap'
import RestaurantList from './components/RestaurantList'
import About from './components/About'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Switch>
          <Route path="/map">
            <RestaurantMap />
          </Route>
          <Route path="/list">
            <RestaurantList />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <RestaurantMap />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
