import MenuItem from '@components/MenuItem';
import style from './style.module.css';

const Menu = ({ menuItems }) => {
    return (
        <div className={style.sidebar__menu}>
            <ul className={style.sidebar__list}>
                {menuItems.map((item) => (
                    <MenuItem key={item.id} name={item.name} icon={item.icon} />
                ))}
            </ul>
        </div>
    );
}

export default Menu;