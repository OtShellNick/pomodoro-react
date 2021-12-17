import React from 'react';

import {InstructionList} from "@components/Pomodoro/components/InstructionList";

import './Pomodoro.scss';

export const Pomodoro = () => {
    return <section className='pomodoro'>
        <div className="pomodoro__left">
            <InstructionList/>
        </div>
        <div className="right"></div>
    </section>
}