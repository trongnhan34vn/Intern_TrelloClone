import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { CREATE_PROJECT, FIND_PROJECTS_BY_USERID } from "../../api/services/projectServices";
import { getProjectsByUserId } from "../../redux/reducers/projectSlice";
import { Project, ProjectDTO } from "../../types/Project.type";



export const findProjectsByUserId = function* (action: PayloadAction<number>) {
  try {
    let response : Project[] = yield call(FIND_PROJECTS_BY_USERID, action.payload);
    yield put(getProjectsByUserId(response));
  } catch (error) {

  }
}

export const createProject = function* ({ payload }: PayloadAction<ProjectDTO>) {
  try {
    yield call(CREATE_PROJECT, payload);
    let fakeAction: PayloadAction<number> = {
      payload: payload.userId,
      type: 'fake-action'
    };
    yield findProjectsByUserId(fakeAction);
  } catch (error) {
    
  }
}