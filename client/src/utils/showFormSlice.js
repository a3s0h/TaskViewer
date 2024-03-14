// showFormSlice.js
import { createSlice } from '@reduxjs/toolkit';

const showFormSlice = createSlice({
  name: 'showForm',
  initialState: {
    showForm : false,
  },
  reducers: {
    setShowForm: (state, action) => {
      state.showForm = !state.showForm;
    },
  },
});

export const { setShowForm } = showFormSlice.actions;
export default showFormSlice.reducer;
