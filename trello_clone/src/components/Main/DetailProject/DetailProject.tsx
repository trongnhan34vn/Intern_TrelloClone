import React, { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findAllBGs } from '../../../redux/reducers/backgroundSlice';
import * as projectSlice from '../../../redux/reducers/projectSlice';
import * as tableSlice from '../../../redux/reducers/tableSlice';
import {
  backgroundSelector,
  memberSelector,
  tableSelector,
} from '../../../redux/selectors';
import SubNav from '../Subnav/SubNav';
import TaskControll from './TaskControll/Board';
import { Table } from '../../../types/Table.type';
import * as memberSlice from '../../../redux/reducers/memberSlice';
import { Member } from '../../../types/Member.type';


export interface SubNavState {
  tableId: number;
  selectTable: Table | null;
  members: Member[]
}

export const SubnavContext = createContext<SubNavState | null>(null);

export default function DetailProject() {
  const dispatch = useDispatch();
  const { tableId } = useParams();

  useEffect(() => {
    if (!tableId) return;
    dispatch(tableSlice.findById(+tableId));
    dispatch(findAllBGs());
  }, [tableId]);

  const selectTable = useSelector(tableSelector).selectTable;
  const backgrounds = useSelector(backgroundSelector).listBGs;

  useEffect(() => {
    if (!selectTable) return;
    dispatch(projectSlice.findById(selectTable.projectId));
    dispatch(memberSlice.findByTableId(selectTable.id));
  }, [selectTable]);

  const members = useSelector(memberSelector).members;

  const getBackgroundURL = () => {
    if (!selectTable) return;
    let bgId = selectTable.bgId;
    let bg = backgrounds.find((bg) => bg.id === bgId);
    if (!bg) return;
    return bg.bgUrl;
  };

  return (
    <div
      style={{ backgroundImage: `url("${getBackgroundURL()}")` }}
      className="flex bg-no-repeat bg-cover bg-center flex-col flex-1 pl-[260px] h-[calc(100vh_-_64px)] overflow-y-auto"
    >
      <div className="grow outline-none overflow-y-auto relative">
        <div className="bottom-0 left-0 overflow-hidden absolute right-0 top-0">
          <div className="flex flex-col h-full relative">
            {/* Sub Nav */}
            <SubnavContext.Provider
              value={{
                tableId: tableId ? +tableId : 0,
                selectTable: selectTable,
                members: members
              }}
            >
              <SubNav />
              {/* Sub Nav */}
              {/* Task */}
              <TaskControll />
              {/* Task */}
            </SubnavContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}
