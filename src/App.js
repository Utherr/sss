import React, { Component } from 'react';
import './App.css';

import Banner from './components/Banner.jsx';
import Welcome from './components/Welcome.jsx';
import Game from './components/Game.jsx';

class App extends Component {

  constructor() {
    super();
    this.state = { welcomeToGame: true };
  }

  render() {
    return (
      <div className="App">
        <Banner />
        { this.renderGame() }
      </div>
    );
  }

  startGame = (welcomeToGame) => {
    this.setState({
      welcomeToGame
    });
  }

  renderGame() {
    if(this.state.welcomeToGame)
      return <Welcome playGame={ this.startGame } />
    return <Game playGame={ this.startGame } />
      
  }
}

export default App;
