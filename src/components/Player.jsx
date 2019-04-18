import React from 'react';
import avatar from './../assets/avatar.png';
import bar from './../assets/bar.png';
import bar2 from './../assets/bar2.png';

export default class Player extends React.Component {

    constructor() {
        super();
        this.state = {
            money: 0
        };
    }

    render() {

        return(
            <div className="row">
                <div className="col-md-4">
                    <img
                        className="avatar"
                        src={ avatar }
                        alt="avatar"
                        onClick={ this.addMoney.bind(this) }
                    />
                    <p>Username</p>
                </div>
                <div className="col-md-8">
                    <p className="h2 stats1 pr-5">Money: { this.state.money }$</p>
                    <hr />
                    <p className="h2">Stats</p>
                    <table>
                        <tr>
                            <td className="stats1 pr-3 py-1">Humour</td>
                            <td>
                                <img
                                    src={ bar }
                                    alt="bar"
                                    className="img-fluid"
                                />
                            </td>
                        </tr>
                        <tr>
                        <td className="stats1 pr-3 py-1">Energy</td>
                            <td>
                                <img
                                    src={ bar2 }
                                    alt="bar2"
                                    className="img-fluid"
                                />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }

    addMoney() {
        this.setState({
            money: this.state.money + 20
        })
    }
}