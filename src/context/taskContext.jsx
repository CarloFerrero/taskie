import React, { createContext, useContext, useState } from 'react';

// Create a Context
export const TaskContext = createContext();

// Create a Provider component
export const TaskProvider = ({ children }) => {
  const [form, setForm] = useState({
    email: ''
  });

  return (
    <TaskContext.Provider value={{ form, setForm }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the TaskContext
export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};
