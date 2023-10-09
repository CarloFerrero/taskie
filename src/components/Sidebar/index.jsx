import style from './style.module.css';
import Logo from '../../assets/logo.svg';
import Menu from '../Menu';

import { GoTasklist } from 'react-icons/go';
import { BsGrid } from 'react-icons/bs';
import { AiOutlineTeam } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import Button from '../Button';

const Sidebar = () => {
    const menuItems = [
        {
            name: 'Dashboard',
            path: '/',
            icon: <BsGrid size={20} />,
            key: 1,
            title: 'Dashboard'
        },
        {
            name: 'Tasks list',
            path: '/task-list',
            icon: <BsGrid size={20} />,
            key: 1,
            title: 'Task list'
        },
        {
            name: 'Create task',
            path: '/create-task',
            icon: <AiOutlineTeam size={20} />,
            key: 3,
            title: 'Team'
        },
        {
            name: 'Edit task',
            path: '/edit-task',
            icon: <GoTasklist size={20} />,
            key: 2,
            title: 'Projects'
        }
    ];

    return (
        <div className={style.sidebar}>
            <img src={Logo} className={style.sidebar__logo} alt="logo" />
            <Menu menuItems={menuItems} />
            <div className={style.sidebar__footer}>
                <Button variant="primary" title="Add Task">
                    Add task
                </Button>
            </div>
        </div>
    );
}

export default Sidebar;