import React from 'react';
import styles from './style.module.css';
import Task from '../../components/Task';

const Dashboard = () => {
  const tasks = [
    {
      id: 1,
      status: 'todo',
      icon: '',
      title: 'User Research',
      excerpt: 'Conduct a user research by conducting online survey and draft  out questionnaires',
      date: '12/12/2020',
      owner: {
        avatar: '',
        username: 'John Doe'
      }
    },
    {
      id: 2,
      status: 'done',
      icon: '',
      title: 'Wireframing',
      excerpt: 'Create wireframes for the application',
      date: '12/12/2020',
      owner: {
        avatar: '',
        username: 'John Doe'
      }
    },
    {
      id: 3,
      status: 'todo',
      icon: '',
      title: 'Prototyping',
      excerpt: 'Create a prototype for the application',
      date: '12/12/2020',
      owner: {
        avatar: '',
        username: 'John Doe'
      }
    },
    {
      id: 4,
      status: 'progress',
      icon: '',
      title: 'User Testing',
      excerpt: 'Test the prototype with the users',
      date: '12/12/2020',
      owner: {
        avatar: '',
        username: 'John Doe'
      }
    }
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.column}>
        <h2>Todo</h2>
        {tasks.filter(task => task.status === 'todo').map(task => (
            <Task 
               icon={task.icon}
               title={task.title}
               excerpt={task.excerpt}
               date={task.date}
               owner={task.owner}
             />
         ))}
      </div>
      <div className={styles.column}>
        <h2>Progress</h2>
        {tasks.filter(task => task.status === 'progress').map(task => (
            <Task 
               icon={task.icon}
               title={task.title}
               excerpt={task.excerpt}
               date={task.date}
               owner={task.owner}
             />
         ))}
      </div>
      <div className={styles.column}>
        <h2>Done</h2>
        {tasks.filter(task => task.status === 'done').map(task => (
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
  );
};

export default Dashboard;
