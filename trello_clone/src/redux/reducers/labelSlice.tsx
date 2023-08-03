import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Label } from '../../types/Label.type';

interface LabelState {
  labels: Label[];
  search: Label[];
}

const initialState: LabelState = {
  labels: [],
  search: [],
};

const labelSlice = createSlice({
  name: 'label',
  initialState: initialState,
  reducers: {
    findAll: () => {},
    getAll: (state, action: PayloadAction<Label[]>) => {
      state.labels = action.payload;
    },
    searchByName: (state, action: PayloadAction<string>) => {},
    getByName: (state, action: PayloadAction<Label[]>) => {
      state.search = action.payload
    },
  },
});

export default labelSlice.reducer;
export const { findAll, getAll, searchByName, getByName } = labelSlice.actions;
