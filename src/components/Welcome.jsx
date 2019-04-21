import React from 'react';

/*
    Welcome screen, where we can sign in/up to play the game
*/

export default function Welcome({ playGame }) {
    return(
        <div className="welcome">
            <p className="pt-5">Sign up/in, welcome panel</p>
            <button
                onClick={ playGame.bind(this, false) }
                className="btn btn-primary"
            >Play
            </button>
        </div>
    );
}