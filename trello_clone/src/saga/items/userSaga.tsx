import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import * as userServices from '../../api/services/userServices';
import { getResult } from '../../redux/reducers/userSlice';

export const login = function* (action: any) {
  try {
    let response: Promise<AxiosResponse<any>> = yield call(
      userServices.LOGIN,
      action.payload
    );
    console.log('login ---->', response);
    yield put(getResult(response));
  } catch (error) {
    console.log('login ---->', error);
  }
};

export const register = function* (action: any) {
  try {
    let response: Promise<AxiosResponse<any>> = yield call(
      userServices.REGISTER,
      action.payload.userRegister
    );
  } catch (error: any) {
    console.log(error);
  } finally {
    if (action.payload.type === 'via3th') {
      let actionfake = {
        payload: {
          email: action.payload.userRegister.email,
          password: action.payload.userRegister.password,
        },
      };
      yield login(actionfake);
    }
  }
};
