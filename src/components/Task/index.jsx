import React from 'react';
import styles from './style.module.css';
import Avatar from '@assets/images/avatar.png';

const Task = ({ title, excerpt, date, owner, project }) => {
    return (
        <div className={styles.taskCard}>
            <div className={styles.taskInfo}>
                <div className={styles.taskHeader}>
                    <h3>{title}</h3>
                    <div className={styles.tag}>
                        <p>{project}</p>
                    </div>
                </div>
                <p>{excerpt}</p>

                <div className={styles.cardFooter}>
                    <div className={styles.ownerInfo}>
                        <img src={Avatar} alt="Owner Avatar" />
                        <p>{owner.username}</p>
                    </div>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
};

export default Task;
