import React from 'react';

import './Timer.scss';

export const Timer = () => {

    return <div className='timer'>
        <div className='timer__header'>
            <span className='timer__header__title'>Timer</span>
            <span>Помидор 1</span>
        </div>
        <div className='timer__body'>
            <div className='timer__body_flex'>
                <span className='timer__body__clock'>{`25:00`}</span>
                <button className='timer__body__add'>+</button>
            </div>
        </div>
    </div>
}