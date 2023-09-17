import React from 'react';
import styles from './style.module.css';
import Task from '../../components/Task';
import { MOCK_DATA } from './MOCK';

const App = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.column}>
        <h2 className={styles.title}>Todo <span className={styles.tag__blu}>{
          MOCK_DATA.filter(task => task.status === 'todo').length
        }</span>
        </h2>
        <div className={styles.column__scroll}>
          {MOCK_DATA.filter(task => task.status === 'todo').map(task => (
            <Task
              icon={task.icon}
              title={task.title}
              excerpt={task.excerpt}
              date={task.date}
              owner={task.owner}
            />
          ))}
        </div>
      </div>
      <div className={styles.column}>
        <h2 className={styles.title}>Progress <span className={styles.tag__yellow}>{
          MOCK_DATA.filter(task => task.status === 'progress').length
        }</span>
        </h2>
          <div className={styles.column__scroll}>
            {MOCK_DATA.filter(task => task.status === 'progress').map(task => (
              <Task
                icon={task.icon}
                title={task.title}
                excerpt={task.excerpt}
                date={task.date}
                owner={task.owner}
              />
            ))}
          </div>
      </div>
      <div className={styles.column}>
        <h2 className={styles.title}>Done <span className={styles.tag__green}>{
          MOCK_DATA.filter(task => task.status === 'done').length
        }</span>
        </h2>
          <div className={styles.column__scroll}>
            {MOCK_DATA.filter(task => task.status === 'done').map(task => (
              <Task
                icon={task.icon}
                title={task.title}
                excerpt={task.excerpt}
                date={task.date}
                owner={task.owner}
              />
            ))}
          </div>
      </div>
    </div>
  );
};

export default App;
