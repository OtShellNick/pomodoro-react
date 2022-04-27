import React from 'react';

import './Timer.scss';

import {Button} from "@components/Button/Button";

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
            <div className='timer__body__task'>
                <span className='timer__body__task_task'>{`Задача 1 -`}&nbsp;</span>
                <span>{` Сверстать сайт`}</span>
            </div>
            <div className='timer__body__buttons'>
                <Button text='Старт' type='ACTIVE' className='timer__body__buttons_margin'/>
                <Button text='Стоп' type='DISABLED' disabled={true}/>
            </div>
        </div>
    </div>
}