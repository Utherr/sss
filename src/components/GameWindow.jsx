import React from 'react';

export default class GameWindow extends React.Component {

    render() {

        return (
            <div className="col-9 h-100 tmp1 pt-5">
                { this.props.already }
            </div>
        );
    }

}