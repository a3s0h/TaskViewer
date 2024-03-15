// showFormSlice.js
import { createSlice } from '@reduxjs/toolkit';

const editTaskWithIdSlice = createSlice({
  name: 'taskId',
  initialState: {
    taskId : null,
  },
  reducers: {
    setTaskId: (state, action) => {
      state.showForm = action.payload;
    },
  },
});

export const { setTaskId } = editTaskWithIdSlice.actions;
export default editTaskWithIdSlice.reducer;
