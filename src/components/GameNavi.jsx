import React from 'react';
import Player from './Player.jsx';
import Work from './Work.jsx';

export default class GameNavi extends React.Component {
    render() {

        const { useWindow } = this.props;

        return (
            <div className="col-3 h-100 tmp2 py-3">
                <p className="h1">Game navi</p>
                <ul className="list-group">
                    <li
                        onClick={ useWindow.bind(this, <Player />) }
                        className="list-group-item"
                    >Player
                    </li>
                    <li
                        onClick={ useWindow.bind(this, <Work />) }
                        className="list-group-item"
                    >Work
                    </li>
                </ul>
            </div>
        );
    }
}