import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { FIND_LISTS_BY_TABLE_ID } from "../../api/services/listServices";
import { getListsByTableId } from "../../redux/reducers/listSlice";
import { List } from "../../types/List.type";

export const findListsByTableId = function* (action: PayloadAction<number>) {
  try {
    let response : List[] = yield call(FIND_LISTS_BY_TABLE_ID, action.payload);  
    yield put(getListsByTableId(response));
  } catch (error) {
    
  }
}