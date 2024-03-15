// showFormSlice.js
import { createSlice } from '@reduxjs/toolkit';

const showFormSlice = createSlice({
  name: 'showForm',
  initialState: {
    showForm : false,
    editForm : false,
  },
  reducers: {
    setShowForm: (state, action) => {
      state.showForm = !state.showForm;
    },
    setEditForm: (state, action) => {
      state.editForm = !state.editForm;
    },
  },
});

export const { setShowForm , setEditForm} = showFormSlice.actions;
export default showFormSlice.reducer;
