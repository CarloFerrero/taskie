import React from 'react';
import style from './style.module.css';

const MenuItem = ({ key, name, icon }) => {
    return (
        <li key={key}>
            <a href={name} className={style.listItem}>
                {icon}
                {name}
            </a>
        </li>
    )
}

export default MenuItem;