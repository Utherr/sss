import React from 'react';
import './../style/Banner.css';

export default class Frame extends React.Component {
    render() {
        return (
            <div className="banner navbar py-3">
                <p className="h2 pl-md-5 pl-4 pt-1">
                    react.<span className="red">may</span>hem
                </p>
            </div>
        );
    }
}