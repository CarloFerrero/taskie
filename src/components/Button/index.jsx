import React from 'react';
import style from './style.module.css';

// Link documentazione: https://react.dev/reference/react/Children

const Button = ({ variant, children }) => {
    let btnStyle = style.default;

    switch (variant) {
        case 'primary':
            btnStyle = style.primary;
            break;
        case 'secondary':
            btnStyle = style.secondary;
            break;
        default:
            btnStyle = style.default;
            break;
    }

    return (
        <button className={btnStyle}>{children}</button>
    );
}

export default Button;
