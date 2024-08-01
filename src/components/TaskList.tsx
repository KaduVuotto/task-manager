import React, { useContext, useState } from 'react';
import { Task, TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList: React.FC = () => {
  const { tasks } = useContext(TaskContext)!;
  const [taskToEdit, setTaskToEdit] = useState<Task | undefined>(undefined);

  return (
    <div>
      <TaskForm taskToEdit={taskToEdit} onSave={() => setTaskToEdit(undefined)} />
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onEdit={setTaskToEdit} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
