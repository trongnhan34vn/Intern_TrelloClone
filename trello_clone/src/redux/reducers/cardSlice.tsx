import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardDB, CardForm, CardPatch } from '../../types/Card.type';

interface CardState {
  listCards: CardDB[];
}

const initState: CardState = {
  listCards: [],
};

const cardSlice = createSlice({
  name: 'card',
  initialState: initState,
  reducers: {
    findAllCards: () => {},
    getAllCards: (state, action: PayloadAction<CardDB[]>) => {
      state.listCards = action.payload;
    },
    createCard: (state, action: PayloadAction<CardForm>) => {},
    deleteCard: (state, action: PayloadAction<number>) => {},
    updateCard: (state, action: PayloadAction<CardPatch>) => {},
  },
});

export default cardSlice.reducer;
export const { findAllCards, getAllCards, createCard, deleteCard, updateCard } =
  cardSlice.actions;
