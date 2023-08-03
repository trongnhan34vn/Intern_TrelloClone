import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardLabel, CardLabelForm } from '../../types/CardLabel.type';

interface CardLabelState {
  cardLabels: CardLabel[];
}

const initialState: CardLabelState = {
  cardLabels: [],
};

const cardLabelSlice = createSlice({
  name: 'cardLabel',
  initialState: initialState,
  reducers: {
    create: (state, action: PayloadAction<CardLabelForm>) => {},
    findAll: () => {},
    getAll: (state, action: PayloadAction<CardLabel[]>) => {
      state.cardLabels = action.payload;
    },
  },
});

export default cardLabelSlice.reducer;
export const { create, findAll, getAll } = cardLabelSlice.actions;
