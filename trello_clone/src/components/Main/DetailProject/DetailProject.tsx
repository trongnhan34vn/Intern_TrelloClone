import React, { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findAllBGs } from '../../../redux/reducers/backgroundSlice';
import * as projectSlice from '../../../redux/reducers/projectSlice';
import * as tableSlice from '../../../redux/reducers/tableSlice';
import {
  backgroundSelector,
  cardSelector,
  memberCardSelector,
  memberSelector,
  tableSelector,
  userSelector,
} from '../../../redux/selectors';

import TaskControll from './TaskControll/Board';
import { Table } from '../../../types/Table.type';
import * as memberSlice from '../../../redux/reducers/memberSlice';
import { Member } from '../../../types/Member.type';
import * as userSlice from '../../../redux/reducers/userSlice';
import { User } from '../../../types/User.type';
import SubNav from '../Subnav/SubNav';
import * as cardSlice from '../../../redux/reducers/cardSlice';
import { CardDB } from '../../../types/Card.type';
import * as memberCardSlice from '../../../redux/reducers/memberCardSlice';
import { MemberCard } from '../../../types/MemberCard.type';


export interface SubNavState {
  tableId: number;
  selectTable: Table | null;
  members: Member[]
  users: User[]
  cards: CardDB[]
  memberCards: MemberCard[]
}

export const SubnavContext = createContext<SubNavState | null>(null);

export default function DetailProject() {
  const dispatch = useDispatch();
  const { tableId } = useParams();

  useEffect(() => {
    if (!tableId) return;
    dispatch(tableSlice.findById(+tableId));
    dispatch(findAllBGs());
    dispatch(userSlice.findAll())
    dispatch(cardSlice.findAllCards())
    dispatch(memberCardSlice.findAll());

  }, [tableId]);

  const memberCards = useSelector(memberCardSelector).memberCards;
  const selectTable = useSelector(tableSelector).selectTable;
  const backgrounds = useSelector(backgroundSelector).listBGs;
  const users = useSelector(userSelector).users;

  useEffect(() => {
    if (!selectTable) return;
    dispatch(projectSlice.findById(selectTable.projectId));
    dispatch(memberSlice.findByTableId(selectTable.id));
  }, [selectTable]);

  const members = useSelector(memberSelector).members;
  const cards = useSelector(cardSelector).listCards;

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
                members: members,
                users: users,
                cards: cards,
                memberCards: memberCards 
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
