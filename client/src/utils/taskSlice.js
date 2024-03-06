import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name:"tasks",
    initialState : null,
    reducers :{
        addTask : (state,action)=>{
            return action.payload;
        },
        removeTask : (state,action )=>{
            return null;
        },
        updateTask : (state,action )=>{
            return action.payload;
        }
    }
})


export const {addTask, removeTask , updateTask}  = taskSlice.actions;
export default taskSlice.reducer ; 