import React from 'react';
import {Link} from "react-router-dom";

import './Pomodoro.scss';

export const Pomodoro = () => {
    return <div>pomodoro
        <Link to='/statistic'>Stat</Link>
    </div>
}