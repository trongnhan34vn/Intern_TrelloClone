import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'table',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openFormTable: (state) => {
      state.isOpen = true;
    },
    closeFormTable: (state) => {
      state.isOpen = false;
    }
  },
});

export default tableSlice.reducer;
export const { openFormTable, closeFormTable } = tableSlice.actions;
