import React from 'react';
import Sidebar from '@components/Sidebar';
import SafeArea from '@components/SafeArea';
import style from './style.module.css';
import useWindowSize from '@hooks/useWindowSize.js';
import Header from '@components/Header';

const Layout = ({ children, user }) => {
    const windowSize = useWindowSize();
    const isDesktop = windowSize.width >= 1168;
    return (
        <div>
            {isDesktop ? <div className={style.container}>
                <Sidebar />
                <div className={style.main}>
                    <Header user={user} />
                    <div className={style.wrapper}>
                        {children}
                    </div>
                </div>
            </div> : <SafeArea />
            }
        </div >
    );
}

export default Layout;