import React from 'react';
import classNames from "classnames";

import './Button.scss';

enum ButtonState {
    ACTIVE = 'ACTIVE',
    STOP = 'STOP',
    DISABLED = 'DISABLED'
}

type TButton = {
    text: string;
    type: ButtonState;
    disabled?: boolean;
    className?: string;
}

export const Button = ({text, type = ButtonState.ACTIVE, disabled = false, className}: TButton) => {

    return <button
        disabled={disabled}
        className={classNames('btn', type.toLowerCase(), className)}>
        {text}
    </button>
}