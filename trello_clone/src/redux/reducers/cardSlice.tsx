import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CardDB,
  CardForm,
  CardPatch,
  CardPatchTest,
  CardUpdateDate,
  CardUpdateDescription,
  CardUpdateStatus,
} from '../../types/Card.type';

interface CardState {
  listCards: CardDB[];
  selectCard: CardDB | null;
}

const initState: CardState = {
  listCards: [],
  selectCard: null,
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
    updateCardTest: (state, action: PayloadAction<CardPatchTest>) => {},
    findCardById: (state, action: PayloadAction<number>) => {},
    getCardById: (state, action: PayloadAction<CardDB | null>) => {
      state.selectCard = action.payload;
    },
    updateCardDescription: (
      state,
      action: PayloadAction<CardUpdateDescription>
    ) => {},
    updateCardDate: (state, action: PayloadAction<CardUpdateDate>) => {},
    updateCardStatus: (state, action: PayloadAction<CardUpdateStatus>) => {
      
    },
  },
});

export default cardSlice.reducer;
export const {
  findAllCards,
  getAllCards,
  createCard,
  deleteCard,
  updateCard,
  updateCardTest,
  findCardById,
  getCardById,
  updateCardDescription,
  updateCardDate,
  updateCardStatus,
} = cardSlice.actions;
