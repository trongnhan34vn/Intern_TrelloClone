import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { CREATE_CARD, DELETE_CARD, FIND_ALL_CARDS, UPDATE_CARD } from "../../api/services/cardServices";
import { getAllCards } from "../../redux/reducers/cardSlice";
import { CardDB, CardForm, CardPatch } from "../../types/Card.type";

export const findAllCards = function* () {
  try {
    let response : CardDB[] = yield call(FIND_ALL_CARDS);
    yield put(getAllCards(response));
  } catch (error) {
    
  }
}

export const createCard = function* (action: PayloadAction<CardForm>) {
  try {
    yield call(CREATE_CARD, action.payload)
    yield findAllCards()
  } catch (error) {
    
  }
}

export const deleteCard = function* (action: PayloadAction<number>) {
  try {
    yield call(DELETE_CARD, action.payload)
    yield findAllCards()
  } catch (error) {
    
  }
}

export const updateCard = function* (action: PayloadAction<CardPatch>) {
  try {   
    yield call(UPDATE_CARD, action.payload)
    // yield findAllCards() 
  } catch (error) {
    
  }
}