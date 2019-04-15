import React, { Component } from 'react';
import './App.css';

import Banner from './components/Banner.jsx';
import Welcome from './components/Welcome.jsx';
import Game from './components/Game.jsx';

class App extends Component {

  constructor() {
    super();
    this.state = { play: false };
  }

  render() {
    return (
      <div className="App">
        <Banner />
        { this.renderGame() }
      </div>
    );
  }

  graj() {
    this.setState({
      play: true
    })
  }

  nieGraj() {
    this.setState({
      play: false
    })
  }

  renderGame() {
    if(this.state.play)
    {
      return (
        <div className="game">
          <button className="button btn btn-secondary px-5" onClick={ this.nieGraj.bind(this) }>Exit</button>
          <Game value="xd" />
        </div>
      );
    }
    else
    {
      return (
        <div>
          <Welcome />
          <button className="button2 btn btn-primary mt-5 px-5" onClick={ this.graj.bind(this) }>Play</button>
        </div>
      );
    }
      
  }
}

export default App;
