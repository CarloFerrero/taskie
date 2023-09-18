import Menu from "../Menu";
import style from './style.module.css';
import viteLogo from '/vite.svg'

const Sidebar = () => {
    const menuItems = [
        {
            name: 'Dashboard',
            path: '/',
            key: 1
        },
        {
            name: 'Tasks',
            path: '/tasks',
            key: 2
        },
        {
            name: 'Settings',
            path: '/settings',
            key: 3
        }
        ];

    return (
        <div className={style.sidebar}>
        <img src={viteLogo} className={style.sidebar__logo} alt="logo" />
        <Menu menuItems={menuItems} />
        <button className={style.sidebar__button}>Add Task</button>
    </div>
    );
}

export default Sidebar;