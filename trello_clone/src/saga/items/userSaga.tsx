import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import * as userServices from '../../api/services/userServices';
import { getByEmail, getResult } from '../../redux/reducers/userSlice';
import {
  User,
  UserDTO,
  UserRequestRegister,
  UserResponseLogin,
} from '../../types/User.type';

export const login = function* (action: PayloadAction<UserDTO>) {
  try {
    let response: UserResponseLogin = yield call(
      userServices.LOGIN,
      action.payload
    );
    console.log(response);

    yield put(getResult(response));
  } catch (error) {
    console.log('login ---->', error);
  }
};

export const register = function* (action: PayloadAction<UserRequestRegister>) {
  try {
    let response: UserResponseLogin = yield call(
      userServices.REGISTER,
      action.payload.user
    );
  } catch (error: any) {
    console.log(error);
  } finally {
    if (action.payload.type === 'via3th') {
      let actionfake: PayloadAction<UserDTO> = {
        type: 'via3th',
        payload: {
          email: action.payload.user.email,
          password: action.payload.user.password,
        },
      };
      yield login(actionfake);
    }
  }
};

export const searchByEmail = function* ({payload}: PayloadAction<string>) {
  try {
    let response: User[] = yield call(userServices.SEARCH_BY_EMAIL, payload);
    yield put(getByEmail(response));
  } catch (error) {
    
  }
}
