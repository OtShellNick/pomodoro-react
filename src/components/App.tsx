import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import './App.scss';

import {Header} from '@components/Header';
import {Pomodoro} from '@components/Pomodoro';
import {Statistic} from '@components/Staristic';
import {rootReducer} from '../store';

const store = createStore(rootReducer, composeWithDevTools());

export const App = () => {
  return <Provider store={store}>
    <Header/>
    <main className='container'>
      <Routes>
        <Route path="/" element={<Pomodoro/>}/>
        <Route path="/statistic" element={<Statistic/>}/>
      </Routes>
    </main>
  </Provider>;
};
