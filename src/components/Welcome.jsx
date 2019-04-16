import React from 'react';

import './../style/Welcome.css';

export default class Welcome extends React.Component {

    render() {
        const { playGame } = this.props;
        return(
            <div className="welcome">
                <p className="pt-5">Sign up/in, welcome panel</p>
                <button onClick={ playGame.bind(this, false) }>Play</button>
            </div>
        );
    }
}