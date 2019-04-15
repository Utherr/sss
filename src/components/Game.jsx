import React from 'react';

import './../style/Game.css';

export default class Game extends React.Component {
    render() {
        return (
            <div className="game pt-5">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-3">
                            <p className="tmp1 pt-5">Some game navigation</p>
                        </div>
                        <div className="col-9">
                            <p className="tmp2 pt-5">Game action window</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}