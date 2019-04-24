import React from 'react';
import Player from './Player.jsx';
import Work from './Work.jsx';

/*
    Game navigation, where we can choose a GameWindow to display
*/

export default function GameNavi({ m, useWindow }) {
    return (
        <div className="gamenavi col-md-3 h-100 py-3">
            <ul className="list-group">
                <li
                    onClick={ useWindow.bind(this, <Player />) }
                    className="list-group-item"
                >Player</li>
                <li
                    onClick={ useWindow.bind(this, <Work />) }
                    className="list-group-item"
                >Work</li>
            </ul>
        </div>
    );
}