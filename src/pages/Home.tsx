import React from 'react';
import TaskList from '../components/TaskList';

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskList />
    </div>
  );
};

