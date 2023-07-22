import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userSlice from './reducers/userSlice';
import { rootSaga } from '../saga';
import typeProjectSlice from './reducers/typeProjectSlice';
import projectSlice from './reducers/projectSlice';
import backgroundSlice from './reducers/backgroundSlice';
import tableSlice from './reducers/tableSlice';
import listSlice from './reducers/listSlice';
import cardSlice from './reducers/cardSlice';
import modalSlice from './reducers/modalSlice';
import workSlice from './reducers/workSlice';
import taskSlice from './reducers/taskSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice,
    type: typeProjectSlice,
		project: projectSlice,
    background: backgroundSlice,
    table: tableSlice,
    list: listSlice,
    card: cardSlice,
    modal: modalSlice,
    work: workSlice,
    task: taskSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export default store;
