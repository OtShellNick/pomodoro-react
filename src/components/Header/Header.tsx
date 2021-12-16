import React from 'react';
import {Link} from "react-router-dom";

import './Header.scss';

import Logo from './icons/tomato.svg?tsx';
import Stats from './icons/stats.svg?tsx';

export const Header = () => {
    return <header className='header'>
        <div className="container">
            <div>
                <div>
                    <Link to='/'>
                        <Logo/>
                        pomodoro_box
                    </Link>
                </div>
                <div>
                    <Link to='/statistic'>
                        <Stats/>
                        Статистика
                    </Link>
                </div>
            </div>
        </div>
    </header>
}