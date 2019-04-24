import React from 'react';

/*
    Banner bar with:
    -logo
    -logout button if we are in game
*/

export default function Banner({ playGame, x }) {
    if(x)
    {
        return (
            <div className="banner navbar py-3">
                <p className="h2 pl-md-5 pl-4 pt-1">
                    react.<span className="bluer">may</span>hem
                </p>
            </div>
        );
    }

    return (
        <div className="banner navbar py-3">
            <p className="h2 pl-md-5 pl-4 pt-1">
                react.<span className="bluer">may</span>hem
            </p>
            <button
                onClick={ playGame.bind(this, true) }
                className="btn btn-primary logoutButton"
            >Logout
            </button>
        </div>
    );

    
}