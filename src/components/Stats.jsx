import React from 'react';
import Statistic from './Statistic.jsx';

/*
    Field with statistics header/table
*/

export default function Stats() {
    return(
        <div>
            <p className="h2">Stats</p>
            <table>
                <Statistic name="Humour" value={ 80 } />
                <Statistic name="Energy" value={ 30 } />
                <Statistic name="Hunger" value={ 20 } />
            </table>
        </div>
    );
}