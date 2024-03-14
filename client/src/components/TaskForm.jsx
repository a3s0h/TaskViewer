import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowForm } from '../utils/showFormSlice';
import axios from 'axios';
import { addTask } from '../utils/taskSlice';

const TaskForm = () => {

  const title = useRef(null);
  const description = useRef(null);

  const dispatch = useDispatch();
  const showForm = useSelector((store) => store.showForm.showForm);
  const user = useSelector((store) => store.user?.username?.displayName);


  const handleTaskForm = async () => {
    console.log(user);
    const titleValue = title?.current?.value;
    const descriptionValue = description?.current?.value;
    const data = { username: user, title: titleValue, description: descriptionValue, completed: false };
    try {
      // Make API call to add task
      const response = await axios.post('http://localhost:3000/api/v1/tasks/', data);
      dispatch(setShowForm());

    } catch (error) {
      // Handle error if the API call fails
      console.error('Error adding task:', error);
    }
  };


  const closeForm = () =>{
    dispatch(setShowForm());
  }

  return showForm &&  (
    <div className="absolute left-0.5 right-0.5 ">
    <div className="relative m-auto mt-40 bg-gray-500 p-10 w-1/4 text-white">
      <span className="absolute top-3 right-3 text-2xl font-bold text-red-200 cursor-pointer" onClick={closeForm}>
        X
      </span>
      <h1 className="text-2xl font-bold mb-5 ">Add Your Task!!</h1>
      <form onSubmit={(e) => e.preventDefault()} action="" className="flex flex-col gap-10 text-black">
        <input
          type="text"
          ref={title}
          placeholder="Enter Title"
          className="p-2"
        />
        <textarea
          className="p-2 h-40"
          ref={description}
          placeholder="Enter description here"
        />

        <button className="p-3 bg-blue-400" onClick={handleTaskForm}>
          Add
        </button>
      </form>
    </div>
    </div>
  );
};

export default TaskForm;
