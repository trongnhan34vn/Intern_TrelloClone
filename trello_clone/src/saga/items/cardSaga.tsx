import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { CREATE_CARD, DELETE_CARD, FIND_ALL_CARDS, FIND_CARD_BY_ID, UPDATE_CARD, UPDATE_CARD_TEST, UPDATE_DATE, UPDATE_DESCRIPTION, UPDATE_STATUS } from "../../api/services/cardServices";
import { getAllCards, getCardById } from "../../redux/reducers/cardSlice";
import { CardDB, CardForm, CardPatch, CardPatchTest, CardUpdateDate, CardUpdateDescription, CardUpdateStatus } from "../../types/Card.type";

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

export const updateCardTest = function* (action: PayloadAction<CardPatchTest>) {
  try {
    yield call(UPDATE_CARD_TEST, action.payload)
  } catch (error) {
    
  }
}

export const findCardById = function*(action: PayloadAction<number>) {
  try {
    let response : CardDB = yield call(FIND_CARD_BY_ID, action.payload);
    yield put(getCardById(response))
  } catch (error) {
    
  }
}

export const updateCardDescription = function*(action: PayloadAction<CardUpdateDescription>) {
  try {
    yield call(UPDATE_DESCRIPTION, action.payload)
    let fakeAction: PayloadAction<number> = {
      type: 'fake action',
      payload: action.payload.id
    }
    yield findCardById(fakeAction)
  } catch (error) {
    
  }
}

export const updateCardDate = function* ({payload}: PayloadAction<CardUpdateDate>) {
  try {
    yield call(UPDATE_DATE, payload);
    let fakeAction: PayloadAction<number> = {
      type: 'fake action',
      payload: payload.id
    }
    yield findCardById(fakeAction)
  } catch (error) {
    
  }
}

export const updateCardStatus = function* ({payload}: PayloadAction<CardUpdateStatus>) {
  try {
    yield call(UPDATE_STATUS, payload)
    let fakeAction: PayloadAction<number> = {
      type: 'fake action',
      payload: payload.id
    }
    yield findCardById(fakeAction)
  } catch (error) {
    
  }
}
