import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import { MOCK_DATA } from '../../TASKS_MOCK';
import Task from '../../components/Task';

const TaskList = () => {

  const [tasks, setTasks] = useState();
  
  const fetchTask = () => {
    return true
  }

  useEffect(() => {
    const tasks = fetchTask();
    if(tasks) {
      setTasks(MOCK_DATA)
    }
  })

  return (
    <div className={styles.dashboard}>
      <div className={styles.column}>
        <h2 className={styles.title}>Todo <span className={styles.tag__blu}>{
          tasks?.filter(task => task.status === 'todo').length
        }</span>
        </h2>
        <div className={styles.column__scroll}>
          {tasks?.filter(task => task.status === 'todo').map(task => (
            <Task
              icon={task.icon}
              title={task.title}
              excerpt={task.excerpt}
              date={task.date}
              owner={task.owner}
              project={task.project}
            />
          ))}
        </div>
      </div>
      <div className={styles.column}>
        <h2 className={styles.title}>Progress <span className={styles.tag__yellow}>{
          tasks?.filter(task => task.status === 'progress').length
        }</span>
        </h2>
          <div className={styles.column__scroll}>
            {tasks?.filter(task => task.status === 'progress').map(task => (
              <Task
                icon={task.icon}
                title={task.title}
                excerpt={task.excerpt}
                date={task.date}
                owner={task.owner}
                project={task.project}
              />
            ))}
          </div>
      </div>
      <div className={styles.column}>
        <h2 className={styles.title}>Done <span className={styles.tag__green}>{
          tasks?.filter(task => task.status === 'done').length
        }</span>
        </h2>
          <div className={styles.column__scroll}>
            {tasks?.filter(task => task.status === 'done').map(task => (
              <Task
                icon={task.icon}
                title={task.title}
                excerpt={task.excerpt}
                date={task.date}
                owner={task.owner}
                project={task.project}
              />
            ))}
          </div>
      </div>
    </div>
  );
};

export default TaskList;
