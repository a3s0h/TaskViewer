import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../utils/taskSlice';

const TaskViewer = () => {
  // const [tasks, setTasks] = useState([]);
  
  const tasks = useSelector(store => store.tasks?.allTasks);
  if(!tasks)return;



  const editTask = async (taskId) => {
    try {
      // Call your updateTask API with the task ID
      const response = await axios.put(`http://localhost:3000/api/v1/tasks/${taskId}/update`, {
        // Provide the updated task data here
        // For example:
        // title: "Updated Title",
        // description: "Updated Description",
      });

      // Handle the updated task in the frontend
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? response.data : task))
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      // Call your deleteTask API with the task ID
      await axios.delete(`http://localhost:3000/api/v1/tasks/${taskId}/remove`);

      // Handle the deleted task in the frontend
      
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="text-center">
      <div className="mx-auto w-full">
        <h2 className="text-3xl font-bold mb-5">Your Tasks</h2>
        <ul className="py-10 px-5 mx-auto w-2/4 border-2 border-black rounded-lg">
          {
          tasks && 
          tasks?.map((task) => (
            <li
              key={task.id}
              className={`${task.completed === true ? 'bg-green-300' : 'bg-blue-300'} py-5 mb-2`}
            >
              <p className="text-3xl font-semibold">{task.title}</p>
              <p className="text-gray-900 text-xl">{task.description}</p>
              <div className="flex justify-center gap-5 my-4 text-xl">
                <button
                  className="px-4 py-2 bg-green-500"
                  onClick={() => editTask(task.id)}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 bg-red-500"
                  onClick={() => deleteTask(task.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskViewer;
