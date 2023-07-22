import { all, takeLatest } from 'redux-saga/effects';
import {
  createProject,
  findProjectsByUserId,
} from '../redux/reducers/projectSlice';
import { findAllTypes } from '../redux/reducers/typeProjectSlice';
import { login, register } from '../redux/reducers/userSlice';
import * as typeSaga from './items/typeSaga';
import * as userSaga from './items/userSaga';
import * as projectSaga from './items/projectSaga';
import { findAllBGs } from '../redux/reducers/backgroundSlice';
import * as backgroundSaga from './items/backgroundSaga';
import {
  createTable,
  findTableByProjectId,
} from '../redux/reducers/tableSlice';
import * as tableSaga from './items/tableSaga';
import {
  createList,
  findListById,
  findListsByTableId,
  updateDragList,
} from '../redux/reducers/listSlice';
import * as listSaga from './items/listSaga';
import {
  createCard,
  deleteCard,
  findAllCards,
  findCardById,
  updateCard,
  updateCardTest,
} from '../redux/reducers/cardSlice';
import * as cardSaga from './items/cardSaga';
import { createWork, deleteWork, findWorksByCardId } from '../redux/reducers/workSlice';
import * as workSaga from './items/workSaga';
import { createTask, findAll } from '../redux/reducers/taskSlice';
import * as taskSaga from './items/taskSaga';

export const rootSaga = function* () {
  yield all([
    // USER
    takeLatest(register.type, userSaga.register),
    takeLatest(login.type, userSaga.login),
    // TYPES
    takeLatest(findAllTypes.type, typeSaga.findAllTypeProjects),
    // PROJECTS
    takeLatest(createProject.type, projectSaga.createProject),
    takeLatest(findProjectsByUserId.type, projectSaga.findProjectsByUserId),
    // BACKGROUNDS
    takeLatest(findAllBGs.type, backgroundSaga.findAllBackgrounds),
    // TABLES
    takeLatest(createTable.type, tableSaga.createTable),
    takeLatest(findTableByProjectId.type, tableSaga.findTableByProjectId),
    // LISTS
    takeLatest(findListsByTableId.type, listSaga.findListsByTableId),
    takeLatest(updateDragList.type, listSaga.updateDragList),
    takeLatest(createList.type, listSaga.createList),
    takeLatest(findListById.type, listSaga.findListById),
    // CARDS
    takeLatest(findAllCards.type, cardSaga.findAllCards),
    takeLatest(createCard.type, cardSaga.createCard),
    takeLatest(deleteCard.type, cardSaga.deleteCard),
    takeLatest(updateCard.type, cardSaga.updateCard),
    takeLatest(updateCardTest.type, cardSaga.updateCardTest),
    takeLatest(findCardById.type, cardSaga.findCardById),
    // WORKS
    takeLatest(createWork.type, workSaga.createWork),
    takeLatest(findWorksByCardId.type, workSaga.findWorksByCardId),
    takeLatest(deleteWork.type, workSaga.deleteWork),
    // TASKS
    takeLatest(createTask.type, taskSaga.createTask),
    takeLatest(findAll.type, taskSaga.findAll),
  ]);
};
