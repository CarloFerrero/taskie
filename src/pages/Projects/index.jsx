import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { MOCK_DATA } from '../../TASKS_MOCK';

const Projects = () => {
  const [filter, setFilter] = useState('');
  const [filteredTasks, setFilteredTasks] = useState(MOCK_DATA);

  useEffect(() => {
    setFilteredTasks('');
    const ft = MOCK_DATA.filter((task) => task.project.toLowerCase().includes(filter.toLowerCase()));
    setFilteredTasks(ft);
  }, [filter]);

  return (
    <div className={styles.tasksTable}>
      <div className={styles.filter}>
        <input
          type="text"
          placeholder="Filter by project name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Title</th>
            <th>Project</th>
            <th>Excerpt</th>
            <th>Date</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id} className={styles.tr}>
              <td>{task.id}</td>
              <td>{task.status}</td>
              <td>{task.title}</td>
              <td>{task.project}</td>
              <td>{task.excerpt}</td>
              <td>{task.date}</td>
              <td>{task.owner.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Projects;
