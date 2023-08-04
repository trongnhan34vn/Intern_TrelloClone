import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import { FIND_ALL, SEARCH_BY_NAME } from '../../api/services/labelServices';
import { getAll, getByName } from '../../redux/reducers/labelSlice';
import { Label } from '../../types/Label.type';

export const findAll = function* () {
  try {
    let response: Label[] = yield call(FIND_ALL);
    yield put(getAll(response));
  } catch (error) {}
};

export const searchByName = function* ({ payload }: PayloadAction<string>) {
  try {
    let response: Label[] = yield call(SEARCH_BY_NAME, payload);
    yield put(getByName(response));
  } catch (error) {}
};
