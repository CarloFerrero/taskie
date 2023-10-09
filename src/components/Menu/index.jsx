import MenuItem from '../MenuItem';
import style from './style.module.css';

const Menu = ({ menuItems }) => {
    return (
        <div className={style.sidebar__menu}>
            <ul className={style.sidebar__list}>
                {menuItems.map((item) => (
                    <div key={item.key}>
                        <MenuItem icon={item.icon} name={item.name} path={item.path} title={item.title} />
                    </div>
                ))}
            </ul>
        </div>
    );
}


export default Menu;