import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Label, LabelForm } from '../../types/Label.type';

interface LabelState {
  labels: Label[];
  search: Label[];
  labelJustAdd: Label | null;
}

const initialState: LabelState = {
  labels: [],
  search: [],
  labelJustAdd: null,
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
      state.search = action.payload;
    },
    create: (state, action: PayloadAction<LabelForm>) => {},
    getJustAdd: (state, action: PayloadAction<Label>) => {
      state.labelJustAdd = action.payload;
    },
  },
});

export default labelSlice.reducer;
export const { findAll, getAll, searchByName, getByName, create, getJustAdd } =
  labelSlice.actions;
