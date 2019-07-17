import React, { Component } from 'react';
import './App.css';
import ClockComponent from './ClockComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClockComponent />
      </div>
    );
  }
}

export default App;
