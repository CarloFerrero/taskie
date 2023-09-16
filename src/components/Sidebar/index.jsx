import Menu from "@components/Menu";
import Button from "@components/Button";
import style from './style.module.css';
import {
    Logo
} from '@assets/svg'

import { GoTasklist } from 'react-icons/go';
import { BsGrid } from 'react-icons/bs';
import { AiOutlineTeam } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

const Sidebar = () => {
    const menuItems = [
        {
            name: 'Dashboard',
            path: '/',
            icon: <BsGrid size={20} />,
            key: 1
        },
        {
            name: 'Projects',
            path: '/projects',
            icon: <GoTasklist size={20} />,
            key: 2
        },
        {
            name: 'Team',
            path: '/Team',
            icon: <AiOutlineTeam size={20} />,
            key: 3
        },
        {
            name: 'Messages',
            path: '/Messages',
            icon: <AiOutlineMessage size={20} />,
            key: 4
        },
        {
            name: 'Settings',
            path: '/Settings',
            icon: <FiSettings size={20} />,
            key: 5
        },
    ];

    return (
        <div className={style.sidebar}>
            <img src={Logo} className={style.sidebar__logo} alt="logo" />
            <Menu menuItems={menuItems} />
            <div className={style.sidebar__footer}>
                <Button variant="primary">
                    Add Task
                </Button>
            </div>
        </div>
    );
}

export default Sidebar;