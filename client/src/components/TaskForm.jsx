import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { setShowForm } from '../utils/showFormSlice';


const TaskForm = () => {
  
  // const [taskFormShow , setTaskFormShow] = useState(false);
  const dispatch = useDispatch();

  const handleTaskForm = () => {
    dispatch(setShowForm(false));
  };


  return (
    
        <div className="relative m-auto mt-40 bg-gray-500 p-10 w-1/4 text-white">
        <span className="absolute top-3 right-3 text-2xl font-bold text-red-200 cursor-pointer" onClick={handleTaskForm}>X</span>
        <h1 className="text-2xl font-bold mb-5 ">Add Your Task!!</h1>
        <form action="" className="flex flex-col gap-10">
            <input 
                type="text" 
                placeholder='Enter Title'    
                className="p-2"
            />
            <textarea 
                className="p-2 h-40"
                placeholder='Enter description here'
            />
            
            <button className="p-3 bg-blue-400">Add</button>
        </form>
        </div>
  )
}

export default TaskForm