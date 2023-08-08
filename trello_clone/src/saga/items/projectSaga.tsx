import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import {
  CREATE_PROJECT,
  FIND_ALL,
  FIND_BY_ID,
  FIND_PROJECTS_BY_USERID,
  REMOVE,
} from '../../api/services/projectServices';
import {
  getAll,
  getById,
  getProjectsByUserId,
} from '../../redux/reducers/projectSlice';
import { Project, ProjectDTO, ProjectDelete } from '../../types/Project.type';

export const findAll = function* () {
  try {
    let response: Project[] = yield call(FIND_ALL);
    yield put(getAll(response));
  } catch (error) {}
};

export const findProjectsByUserId = function* (action: PayloadAction<number>) {
  try {
    let response: Project[] = yield call(
      FIND_PROJECTS_BY_USERID,
      action.payload
    );
    yield put(getProjectsByUserId(response));
  } catch (error) {}
};

export const createProject = function* ({
  payload,
}: PayloadAction<ProjectDTO>) {
  try {
    yield call(CREATE_PROJECT, payload);
    let fakeAction: PayloadAction<number> = {
      payload: payload.userId,
      type: 'fake-action',
    };
    yield findProjectsByUserId(fakeAction);
    yield findAll();
  } catch (error) {}
};

export const findById = function* ({ payload }: PayloadAction<number>) {
  try {
    let response: Project = yield call(FIND_BY_ID, payload);
    yield put(getById(response));
  } catch (error) {}
};

export const remove = function* ({ payload }: PayloadAction<ProjectDelete>) {
  try {
    yield call(REMOVE, payload);
    let fakeAction: PayloadAction<number> = {
      payload: payload.userId,
      type: 'fake-action',
    };
    yield findProjectsByUserId(fakeAction);
    yield findAll();
  } catch (error) {}
};
