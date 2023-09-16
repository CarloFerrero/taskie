import React from 'react';
import style from './style.module.css';

const Button = ({variant, children}) => {
    return (
        <>
        {variant === 'primary' ? 
          <button className={style.primary}>{children}</button> 
        : <button className={style.default}>{children}</button>}
        </>
    );
}

export default Button;