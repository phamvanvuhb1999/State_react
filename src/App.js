import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css'

import TrafficLight from './components/TrafficLight.js';

class App extends Component {
  render(){
    return (
      <div className="App" >
        <TrafficLight />
        <div>flooter</div>
      </div>
    )
  }
}


export default App;