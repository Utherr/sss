import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Your name here
          </p>
          <h1>
            Learning React
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
