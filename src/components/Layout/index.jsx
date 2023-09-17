import React from 'react';
import Sidebar from '@components/Sidebar';
import SafeArea from '@components/SafeArea';
import style from './style.module.css';
import useWindowSize from '@hooks/useWindowSize.js';
import Header from '@components/Header';

const Layout = ({ children }) => {
    const windowSize = useWindowSize();
    const isDesktop = windowSize.width >= 1168;
    const user = {
        name: 'John Doe',
        email: 'john.doe@email.com',
        avatar: 'https://avatars.githubusercontent.com/u/61538469?v=4'
      };
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