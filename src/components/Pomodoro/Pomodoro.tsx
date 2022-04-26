import React from 'react';

import {InstructionList} from './components/InstructionList';
import {TaskForm} from './components/TaskForm/TaskForm';

import './Pomodoro.scss';

export const Pomodoro = () => {
  return <section className='pomodoro'>
    <div className="pomodoro__left">
      <InstructionList/>
      <TaskForm/>
    </div>
    <div className="right"></div>
  </section>;
};
