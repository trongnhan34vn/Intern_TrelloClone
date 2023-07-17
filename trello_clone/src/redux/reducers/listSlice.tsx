import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { List } from '../../types/List.type';

interface ListState {
  lists: List[];
}
const initState: ListState = {
  lists: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState: initState,
  reducers: {
    findListsByTableId: (state, action: PayloadAction<number>) => {},
    getListsByTableId: (state, action: PayloadAction<List[]>) => {
      state.lists = action.payload;
    },
  },
});

export default listSlice.reducer;
export const { findListsByTableId, getListsByTableId } = listSlice.actions;
