import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import {
  CREATE_MEMBER,
  FIND_BY_TABLE_ID,
  UPDATE_CARD,
  UPDATE_ROLE,
  UPDATE_TASK,
} from '../../api/services/memberServices';
import { getByTableId } from '../../redux/reducers/memberSlice';
import { Member, MemberForm, MemberUpdateCard, MemberUpdateRole, MemberUpdateTask } from '../../types/Member.type';

export const createMember = function* ({ payload }: PayloadAction<MemberForm>) {
  try {
    yield call(CREATE_MEMBER, payload);
    let fakeAction: PayloadAction<number> = {
      type: 're-call findByTableId',
      payload: payload.tableId ? payload.tableId : 0
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

export const updateRole = function* ({ payload }: PayloadAction<MemberUpdateRole>) {
  try {
    yield call(UPDATE_ROLE, payload);
    let fakeAction: PayloadAction<number> = {
      type: 'recall-find',
      payload: payload.tableId
    } 
    yield findByTableId(fakeAction);
  } catch (error) {
    
  }
}

export const updateCard = function* ({ payload }: PayloadAction<MemberUpdateCard>) {
  try {
    yield call(UPDATE_CARD, payload)
    let fakeAction: PayloadAction<number> = {
      type: 'recall-find',
      payload: payload.tableId
    } 
    yield findByTableId(fakeAction);
  } catch (error) {
    
  }
}

export const updateTask = function* ({payload}: PayloadAction<MemberUpdateTask>) {
  try {
    yield call(UPDATE_TASK, payload)
    let fakeAction: PayloadAction<number> = {
      type: 'recall-find',
      payload: payload.tableId
    } 
    yield findByTableId(fakeAction);
  } catch (error) {
    
  }
}
