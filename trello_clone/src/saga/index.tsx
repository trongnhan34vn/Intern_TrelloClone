import { all, takeLatest } from 'redux-saga/effects';
import { createProject, findProjectsByUserId } from '../redux/reducers/projectSlice';
import { findAllTypes } from '../redux/reducers/typeProjectSlice';
import { login, register } from '../redux/reducers/userSlice';
import * as typeSaga from './items/typeSaga';
import * as userSaga from './items/userSaga';
import * as projectSaga from './items/projectSaga';
import { findAllBGs } from '../redux/reducers/backgroundSlice';
import * as backgroundSaga from './items/backgroundSaga';
import { createTable, findTableByProjectId } from '../redux/reducers/tableSlice';
import * as tableSaga from './items/tableSaga';
import { findListsByTableId } from '../redux/reducers/listSlice';
import * as listSaga from './items/listSaga';
import { createCard, deleteCard, findAllCards, updateCard } from '../redux/reducers/cardSlice';
import * as cardSaga from './items/cardSaga';

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
    // CARDS
    takeLatest(findAllCards.type, cardSaga.findAllCards),
    takeLatest(createCard.type, cardSaga.createCard),
    takeLatest(deleteCard.type, cardSaga.deleteCard),
    takeLatest(updateCard.type, cardSaga.updateCard)
  ]);
};
