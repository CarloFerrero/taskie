import React from 'react';
import style from './style.module.css';
import { IoResize } from 'react-icons/io5';

const SafeArea = () => {
    return (
        <div className={style.safe}>
            <IoResize size={20}/>
            <p>Only available on desktop,<br />
            Please resize your browser
            </p>
        </div>
    );
}

export default SafeArea;