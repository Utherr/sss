import React from 'react';
import bar from './../assets/bar.png';
import bar2 from './../assets/bar2.png';

/*
    Single statistic, with name and value bar
*/

export default function Statistic({ name, value }) {
    return (
        <tr>
            <td className="text-right pr-3 py-1">{ name }</td>
            <td>
                <img
                    src={ value > 50 ? bar : bar2 }
                    alt="bar"
                    className="img-fluid"
                />
            </td>
        </tr>
    );
}