import React from 'react';
import Stats from './Stats.jsx';
import avatar from './../assets/avatar.png';

/*
    Player window, with:
    -avatar
    -money
    -stats
*/

export default function Player() {
    return (
        <div className="row">
            <div className="col-md-4">
                <img
                    className="avatar"
                    src={ avatar }
                    alt="avatar"
                />
                <p>Username</p>
            </div>
            <div className="col-md-8">
                <p className="h2 stats1 pr-5">Money: 20$</p>
                <hr />
                <Stats />
            </div>
        </div>
    );
}