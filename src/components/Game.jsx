import React from 'react';
import GameNavi from './GameNavi.jsx';
import GameWindow from './GameWindow.jsx';

import './../style/Game.css';

export default class Game extends React.Component {

    render() {

        const { playGame } = this.props;

        return (
            <div className="game pt-5">
                <div className="container h-100">
                    <div className="row h-100">
                        <GameNavi />
                        <GameWindow />
                        <button
                            onClick={ playGame.bind(this, true) }
                            className="btn btn-primary logoutButton"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}