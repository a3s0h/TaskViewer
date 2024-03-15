import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEditForm, setShowForm } from '../utils/showFormSlice';
import axios from 'axios';
import { addTask, updateTask } from '../utils/taskSlice';

const EditForm = () => {
    const taskId = useSelector(store => store.taskId?.taskId);
    const showEditForm = useSelector((store) => store.showForm?.editForm);
    const dispatch = useDispatch();

    const title = useRef(null);
    const description = useRef(null);

    const useEditTask = async () => {
        const data = {
            "completed": false,
            "description": description.current.value,
            "id": taskId,
            "title": title.current.value,
        };
        const reqData = {title : data.title , description : data.description}
        try {
            const response = await axios.put(`http://localhost:3000/api/v1/tasks/${taskId}/update`, reqData);
            dispatch(updateTask(data));
            dispatch(setEditForm());
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleEditForm = () => {
        if (!title.current || !description.current) return;
        useEditTask();
    }

    const closeForm = () => {
        dispatch(setEditForm());
    }

    return showEditForm && (
        <div className="absolute left-0.5 right-0.5 ">
            <div className="relative m-auto mt-40 bg-gray-500 p-10 w-1/4 text-white">
                <span className="absolute top-3 right-3 text-2xl font-bold text-red-200 cursor-pointer" onClick={closeForm}>
                    X
                </span>
                <h1 className="text-2xl font-bold mb-5 ">Edit Task!!</h1>
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

                    <button className="p-3 bg-blue-400" onClick={handleEditForm}>
                        Edit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditForm;
