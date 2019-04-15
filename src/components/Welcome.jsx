import React from 'react';

import './../style/Welcome.css';

export default class Welcome extends React.Component {
    render() {
        return(
            <div className="welcome">
                <p className="pt-5">Sign up/in, welcome panel</p>
            </div>
        );
    }
}