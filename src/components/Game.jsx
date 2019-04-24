import React from 'react';
import GameNavi from './GameNavi.jsx';
import GameWindow from './GameWindow.jsx';
import Player from './Player.jsx';
import './../style/Game.css';

/*
    Game screen, which have both game navigation/window
    We set up a Player window to be first
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

    some() {
        if(window.screen.width > 600)
            return(<GameNavi useWindow={ this.setWindow } />);
        return;
    }

    render() {

        return (
            <div className="game py-2">
                <div className="container h-100">
                    <div className="row h-100">
                        { this.some() }
                        <GameWindow already={ this.state.window } />
                        
                    </div>
                </div>
            </div>
        );
    }
}