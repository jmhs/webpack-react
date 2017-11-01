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
import NavBar from "./Navbar.js"
import MainWork from "./MainWork.js"



class App extends Component {
  render() {
    return (
      <Router>
      <Route render={({location, history, match}) => {
        return (
          <Switch key={location.key} location={location}>
            <Route exact path="/" component={MainWork}/>
            <Route exact path="/coincubate" component={MainCoIncubate}/>
            <Route exact path="/masterclass" component={MainMasterclass}/>
            <Route exact path="/services" component={Dummcomponent}/>
          </Switch>
                    );
                }}/>
      </Router>

    );
  }
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className="App-title">Welcome to React</h1>
//   </header>
//   <p className="App-intro">
//   </p>
//   <div>
//     <Dummcomponent/>
//   </div>
