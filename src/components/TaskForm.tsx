import React, { useState, useContext, FormEvent } from 'react';
import { Task, TaskContext } from '../context/TaskContext';

interface TaskFormProps {
  taskToEdit?: Task;
  onSave: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ taskToEdit, onSave }) => {
  const { addTask, editTask } = useContext(TaskContext)!;
  const [task, setTask] = useState<Task>(taskToEdit || { id: 0, title: '', description: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (task.id) {
      editTask(task.id, task);
    } else {
      addTask({ ...task, id: Date.now() });
    }
    onSave();
    setTask({ id: 0, title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task.title} 
        onChange={(e) => setTask({ ...task, title: e.target.value })} 
        placeholder="Title" 
        required 
      />
      <textarea 
        value={task.description} 
        onChange={(e) => setTask({ ...task, description: e.target.value })} 
        placeholder="Description" 
        required 
      />
      <button type="submit">{task.id ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;
