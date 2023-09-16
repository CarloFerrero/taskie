import React from 'react';
import Sidebar from '@components/Sidebar';
import SafeArea from '@components/SafeArea';
import style from './style.module.css';
import useWindowSize from '../../hook/useWindowSize';

const Layout = ({ children }) => {
    const windowSize = useWindowSize();
    const isDesktop = windowSize.width >= 968;
    return (
        <div>
            {isDesktop ? <div className={style.container}>
                <Sidebar />
                <div className={style.main}>
                    {children}
                </div>
            </div> : <SafeArea />}
        </div>
    );
}

export default Layout;