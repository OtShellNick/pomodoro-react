import React from 'react';

import {InstructionList} from './components/InstructionList';
import {TaskForm} from './components/TaskForm/TaskForm';
import {Timer} from "./components/Timer/Timer";

import './Pomodoro.scss';

export const Pomodoro = () => {
  return <section className='pomodoro'>
    <div className="pomodoro__left">
      <InstructionList/>
      <TaskForm/>
    </div>
    <div className="pomodoro__right">
      <Timer/>
    </div>
  </section>;
};
