import React from 'react';
import { useTask } from '../../context/taskContext';

const TaskList = () => {
  const { form } = useTask();

  return (
    <div>
      <h1>Display Task Data</h1>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
};

export default TaskList;