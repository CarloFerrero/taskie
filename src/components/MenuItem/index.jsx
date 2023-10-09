import React from 'react';
import style from './style.module.css';

const MenuItem = ({ icon, name, path, title }) => {
    return (
        <li className={style.sidebar__listItem}>
            <a href={path} className={style.listItem} title={title}>{icon}{name}</a>
        </li>
    );
}

export default MenuItem;