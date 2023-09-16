import React from 'react';
import style from './style.module.css';

const MenuItem = ({key, name, icon}) => {
    return (
        <li className={style.listItem} key={key}>
            {icon}
            <p className={style.menuItem}>{name}</p>
        </li>
    )
}

export default MenuItem;