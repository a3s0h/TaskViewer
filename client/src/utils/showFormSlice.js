// showFormSlice.js
import { createSlice } from '@reduxjs/toolkit';

const showFormSlice = createSlice({
  name: 'showForm',
  initialState: false,
  reducers: {
    setShowForm: (state, action) => action.payload,
  },
});

export const { setShowForm } = showFormSlice.actions;
export default showFormSlice.reducer;
