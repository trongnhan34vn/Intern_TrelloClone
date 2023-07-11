import { all, takeLatest } from 'redux-saga/effects';
import { login, register } from '../redux/reducers/userSlice';
import * as userSaga from './items/userSaga';

export const rootSaga = function* () {
  yield all([
    takeLatest(register.type, userSaga.register),
    takeLatest(login.type, userSaga.login),
  ]);
};
