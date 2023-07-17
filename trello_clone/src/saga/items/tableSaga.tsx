import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import { CREATE_TABLE, FIND_TABLES_BY_PROJECT_ID } from '../../api/services/tableServices'
import { getLatestTable, getTablesByProjectId } from '../../redux/reducers/tableSlice'
import { Table, TableDTO } from '../../types/Table.type'

export const createTable = function*(action : PayloadAction<TableDTO>) {
  try {
    let respone : Table = yield call(CREATE_TABLE, action.payload);
    yield put(getLatestTable(respone));
  } catch (error) {
    
  }
}

export const findTableByProjectId = function* (action: PayloadAction<number>){
  try {
    let response : Table[] = yield call(FIND_TABLES_BY_PROJECT_ID, action.payload);
    console.log(response);
    
    yield put(getTablesByProjectId(response));
  } catch (error) {

  }
}