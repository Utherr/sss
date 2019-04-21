import React from 'react';

/*
    Just a game content window
*/

export default function GameWindow({ already }) {
    return (
        <div className="gamewindow col-9 h-100 pt-5">
            { already }
        </div>
    );
}