import React from 'react';
import style from './style.module.css';

const MenuItem = ({ key, name, icon, path }) => {
    return (
        <li key={key}>
            <a href={path} className={style.listItem}>
                {icon}
                {name}
            </a>
        </li>
    )
}

export default MenuItem;