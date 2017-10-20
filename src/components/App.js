import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import logo from './logo.svg';
import '../scss/components/_App.scss';
import Dummcomponent from "./dummycomponent.js"
import MainLandingPage from "./MainLandingPage.js"
import MainCoIncubate from "./MainCoIncubate.js"
import MainMasterclass from "./MainMasterclass.js"
import MainServices from "./MainServices.js"




class App extends Component {
  render() {
    return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Dummcomponent/>
        </div>
      </div>
      <Router>
          <Switch key={location.key} location={location}>
            <Route path="/" component={MainLandingPage}/>
            <Route path="/coincubate" component={MainCoIncubate}/>
            <Route path="/masterclass" component={MainMasterclass}/>
            <Route path="/services" component={dummycomponent}/>
          </Switch>
      </Router>
  </div>
    );
  }
}

export default App;
