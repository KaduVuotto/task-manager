import React, { createContext, useState, useEffect, ReactNode } from 'react';

export interface Task {
  id: number;
  title: string;
  description: string;
}

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  editTask: (id: number, updatedTask: Task) => void;
  deleteTask: (id: number) => void;
}

export const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id: number, updatedTask: Task) => {
    setTasks(tasks.map(task => task.id === id ? updatedTask : task));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
