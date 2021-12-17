import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.scss';

import {Header} from "@components/Header";
import {Pomodoro} from "@components/Pomodoro";
import {Statistic} from "@components/Staristic";

export const App = () => {
    return <>
        <Header/>
        <main className='container'>
            <Routes>
                <Route path="/" element={<Pomodoro/>}/>
                <Route path="/statistic" element={<Statistic/>}/>
            </Routes>
        </main>
    </>
}