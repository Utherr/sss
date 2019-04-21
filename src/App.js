import React from 'react';
import Banner from './components/Banner.jsx';
import Welcome from './components/Welcome.jsx';
import Game from './components/Game.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

/*
  Main class, where we can switch view between welcome/game screen
*/

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { welcomeToGame: false }; //change to true if want welcome panel as first
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

  render() {
    return (
      <div className="App">
        <Banner />
        { this.renderGame() }
        <Footer />
      </div>
    );
  }
}
