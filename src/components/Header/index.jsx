import React from 'react';
import styles from './style.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiNotification } from 'react-icons/bi';
import Avatar from '@assets/images/avatar.png';
import Search from '@components/Search';

const Header = ({ user }) => {
  return (
    <header className={styles.header}>
      <Search />
      <div className={styles.userInfo}>
      <BiNotification className={styles.notificationIcon} />
        <img src={Avatar} alt="User Avatar" className={styles.avatar} />
        <div className={styles.userDetails}>
          <p className={styles.userName}>{user.name}</p>
          <p className={styles.userEmail}>{user.email}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;