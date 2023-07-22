import { PayloadAction } from '@reduxjs/toolkit'
import {call, put} from 'redux-saga/effects'
import { CREATE_TASK, FIND_ALL } from '../../api/services/taskServices'
import { getAll } from '../../redux/reducers/taskSlice'
import { Task, TaskForm } from '../../types/Task.type'

export const createTask = function*(action: PayloadAction<TaskForm>) {
  try {
    yield call(CREATE_TASK, action.payload);
    yield findAll()
  } catch (error) {
    
  }
}

export const findAll = function* () {
  try {
    let response: Task[] = yield call(FIND_ALL)
    yield put(getAll(response))
  } catch (error) {
    
  }
}