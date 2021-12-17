import React from 'react';

import './InstructionList.scss';

export const InstructionList = () => {
    return <div className='instruction-list'>
        <span className='instruction-list__title'>Ура! Теперь можно начать работать:</span>
        <ul className='instruction-list__list'>
            <li className='instruction-list__item'>Выберите категорию и напишите название текущей задачи</li>
            <li className='instruction-list__item'>Запустите таймер («помидор»)</li>
            <li className='instruction-list__item'>Работайте пока «помидор» не прозвонит</li>
            <li className='instruction-list__item'>Сделайте короткий перерыв (3-5 минут)</li>
            <li className='instruction-list__item'>Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).</li>
        </ul>
    </div>
}





