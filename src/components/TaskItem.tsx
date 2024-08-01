import React, { useContext } from 'react';
import { Task, TaskContext } from '../context/TaskContext';

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit }) => {
  const { deleteTask } = useContext(TaskContext)!;

  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
