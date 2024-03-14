// taskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        allTasks: null,
    },
    reducers: {
        addTask: (state, action) => {
            state.allTasks = action.payload;;
        },
        removeTask: (state, action) => {
            state.allTasks = state.allTasks.filter(task => task.id !== action.payload);
        },
        updateTask: (state, action) => {
            state.allTasks = state.allTasks.map(task =>
                task.id === action.payload.id ? { ...task, ...action.payload } : task
            );
        },
    },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
