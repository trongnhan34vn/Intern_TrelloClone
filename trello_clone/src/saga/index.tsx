import { all, takeLatest } from 'redux-saga/effects';
import * as projectSlice from '../redux/reducers/projectSlice';
import { findAllTypes } from '../redux/reducers/typeProjectSlice';
import { login, register } from '../redux/reducers/userSlice';
import * as typeSaga from './items/typeSaga';
import * as userSaga from './items/userSaga';
import * as projectSaga from './items/projectSaga';
import { findAllBGs } from '../redux/reducers/backgroundSlice';
import * as backgroundSaga from './items/backgroundSaga';
import * as tableSlice from '../redux/reducers/tableSlice';
import * as tableSaga from './items/tableSaga';
import * as listSlice from '../redux/reducers/listSlice';
import * as listSaga from './items/listSaga';
import * as cardSlice from '../redux/reducers/cardSlice';
import * as cardSaga from './items/cardSaga';
import {
  createWork,
  deleteWork,
  findWorksByCardId,
} from '../redux/reducers/workSlice';
import * as workSaga from './items/workSaga';
import { changeStatus, createTask, findAll } from '../redux/reducers/taskSlice';
import * as taskSaga from './items/taskSaga';

export const rootSaga = function* () {
  yield all([
    // USER
    takeLatest(register.type, userSaga.register),
    takeLatest(login.type, userSaga.login),
    // TYPES
    takeLatest(findAllTypes.type, typeSaga.findAllTypeProjects),
    // PROJECTS
    takeLatest(projectSlice.createProject.type, projectSaga.createProject),
    takeLatest(
      projectSlice.findProjectsByUserId.type,
      projectSaga.findProjectsByUserId
    ),
    takeLatest(projectSlice.findById.type, projectSaga.findById),
    // BACKGROUNDS
    takeLatest(findAllBGs.type, backgroundSaga.findAllBackgrounds),
    // TABLES
    takeLatest(tableSlice.createTable.type, tableSaga.createTable),
    takeLatest(
      tableSlice.findTableByProjectId.type,
      tableSaga.findTableByProjectId
    ),
    takeLatest(tableSlice.findAll.type, tableSaga.findAll),
    takeLatest(tableSlice.findById.type, tableSaga.findById),
    // LISTS
    takeLatest(listSlice.findListsByTableId.type, listSaga.findListsByTableId),
    takeLatest(listSlice.updateDragList.type, listSaga.updateDragList),
    takeLatest(listSlice.createList.type, listSaga.createList),
    takeLatest(listSlice.findListById.type, listSaga.findListById),
    takeLatest(listSlice.findAllList.type, listSaga.findAllLists),
    // CARDS
    takeLatest(cardSlice.findAllCards.type, cardSaga.findAllCards),
    takeLatest(cardSlice.createCard.type, cardSaga.createCard),
    takeLatest(cardSlice.deleteCard.type, cardSaga.deleteCard),
    takeLatest(cardSlice.updateCard.type, cardSaga.updateCard),
    takeLatest(cardSlice.updateCardTest.type, cardSaga.updateCardTest),
    takeLatest(cardSlice.findCardById.type, cardSaga.findCardById),
    takeLatest(
      cardSlice.updateCardDescription.type,
      cardSaga.updateCardDescription
    ),
    takeLatest(cardSlice.updateCardDate.type, cardSaga.updateCardDate),
    takeLatest(cardSlice.updateCardStatus.type, cardSaga.updateCardStatus),
    // WORKS
    takeLatest(createWork.type, workSaga.createWork),
    takeLatest(findWorksByCardId.type, workSaga.findWorksByCardId),
    takeLatest(deleteWork.type, workSaga.deleteWork),
    // TASKS
    takeLatest(createTask.type, taskSaga.createTask),
    takeLatest(findAll.type, taskSaga.findAll),
    takeLatest(changeStatus.type, taskSaga.changeStatus),
  ]);
};
