import React from 'react';
import GameNavi from './GameNavi.jsx';
import GameWindow from './GameWindow.jsx';
import Player from './Player.jsx';
import './../style/Game.css';

/*
    Game screen, which have both game navigation/window
    We set up a Player window to be first
    And logout button is here, for now...
*/

export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            window: <Player />,
            x: false
        }
    }

    setWindow = (window) => {
        this.setState({
          window
        });
    }

    render() {
        const { playGame } = this.props;

        return (
            <div className="game py-2">
                <div className="container h-100">
                    <div className="row h-100">
                        <GameNavi m={ this.state.money } useWindow={ this.setWindow } />
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
}