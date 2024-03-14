import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState : {
        username : null,
    },
    reducers :{
        addUser : (state,action)=>{
            state.username = action.payload;
        },
        removeUser : (state,action )=>{
            return null;
        }
    }
})


export const {addUser, removeUser}  = userSlice.actions;
export default userSlice.reducer ; 