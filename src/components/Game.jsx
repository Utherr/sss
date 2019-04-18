import React from 'react';
import GameNavi from './GameNavi.jsx';
import GameWindow from './GameWindow.jsx';
import Player from './Player.jsx';

import './../style/Game.css';

export default class Game extends React.Component {

    constructor() {
        super();
        this.state = {
            window: <Player />
        }
    }

    render() {

        const { playGame } = this.props;

        return (
            <div className="game py-2">
                <div className="container h-100">
                    <div className="row h-100">
                        <GameNavi useWindow={ this.setWindow } />
                        <GameWindow already={ this.state.window } />
                        <button
                            onClick={ playGame.bind(this, true) }
                            className="btn btn-primary logoutButton"
                        >Logout
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    setWindow = (window) => {
        this.setState({
          window
        });
      }
}