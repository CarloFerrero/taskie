import React from 'react';
import style from './style.module.css';
import Sidebar from '../Sidebar';
import useWindowSize from '../../hook/useWindowSize';
import SafeArea from '../SafeArea';
import Header from '../Header';

const Layout = ({ children }) => {
    const {width , height} = useWindowSize();
    const isDesktop = width >= 1168; 

    const user ={
        name: "Carlo",
        email: "carlo.ferrero@email.com"
    }

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
            </div> : <SafeArea />}
        </div>
    );
}

export default Layout;