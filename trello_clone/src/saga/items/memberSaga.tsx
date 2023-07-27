import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import {
  CREATE_MEMBER,
  FIND_BY_TABLE_ID,
} from '../../api/services/memberServices';
import { getByTableId } from '../../redux/reducers/memberSlice';
import { Member, MemberForm } from '../../types/Member.type';

export const createMember = function* ({ payload }: PayloadAction<MemberForm>) {
  try {
    yield call(CREATE_MEMBER, payload);
    let fakeAction: PayloadAction<number> = {
      type: 're-call findByTableId',
      payload: payload.tableId
    }
    yield findByTableId(fakeAction);
  } catch (error) {}
};

export const findByTableId = function* ({ payload }: PayloadAction<number>) {
  try {
    let response: Member[] = yield call(FIND_BY_TABLE_ID, payload);
    yield put(getByTableId(response));
  } catch (error) {}
};
