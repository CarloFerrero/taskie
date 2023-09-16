import style from './style.module.css';

const Menu = ({ menuItems }) => {
    return (
        <div className={style.sidebar__menu}>
            <ul className={style.sideb4ar__list}>
                {menuItems.map((item) => (
                    <li className={style.sidebar__listItem} key={item.key}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;