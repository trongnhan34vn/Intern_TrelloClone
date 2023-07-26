import React, { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findAllBGs } from '../../../redux/reducers/backgroundSlice';
import * as projectSlice from '../../../redux/reducers/projectSlice';
import * as tableSlice from '../../../redux/reducers/tableSlice';
import { backgroundSelector, tableSelector } from '../../../redux/selectors';
import SubNav from '../Subnav/SubNav';
import TaskControll from './TaskControll/Board';

export interface SubNavState {
  tableId: number;
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
  }, [selectTable]);

  const getBackgroundURL = () => {
    if (!selectTable) return;
    let bgId = selectTable.bgId;
    let bg = backgrounds.find((bg) => bg.id === bgId);
    if (!bg) return;
    return bg.bgUrl;
  };
  console.log(getBackgroundURL());

  // const createTagElement = () => {
  //   if (!isCreateTag) {
  //     return (
  //       <div className="items-center pr-2 flex flex-shrink-0 relative transition-all ease-in-out duration-200 justify-between">
  //         <button
  //           onClick={() => setIsCreateTag(true)}
  //           type="button"
  //           className="rounded-[8px] min-h-[32px] text-sm text-left text-[#000] w-full hover:bg-[#091E4224] block my-2 ml-2 py-1 pl-[6px] pr-2 relative "
  //         >
  //           <i className="fa-solid fa-plus text-sm mr-[6px]"></i>
  //           <span className="">Thêm thẻ</span>
  //         </button>
  //       </div>
  //     );
  //   }
  //   return (
  //     <div className="create-tag mx-1 px-1 py-[6px] transition-all ease-in-out duration-200 mb-2">
  //       <div className="w-full mb-[7px] bg-[#fff] pt-2 pr-2 pb-1 pl-3 shadow-[0_1px_1px_#091e4240] rounded-[8px] overflow-hidden h-14">
  //         <textarea
  //           placeholder="Nhập tiêu đề cho thẻ này..."
  //           className="w-full h-full text-sm resize-none outline-none"
  //         ></textarea>
  //       </div>
  //       <div className="flex">
  //         <button className="text-sm bg-[#0C66E4] rounded-[3px] py-[6px] px-3 text-[#fff]">
  //           Thêm thẻ
  //         </button>
  //         <button
  //           onClick={() => setIsCreateTag(false)}
  //           className="w-8 h-8 flex items-center justify-center"
  //         >
  //           <i className="fa-solid fa-xmark text-lg"></i>
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div
      style={{ backgroundImage: `url("${getBackgroundURL()}")` }}
      className="flex bg-no-repeat bg-cover bg-center flex-col flex-1 pl-[260px] h-[calc(100vh_-_64px)] overflow-y-auto"
    >
      <div className="grow outline-none overflow-y-auto relative">
        <div className="bottom-0 left-0 overflow-hidden absolute right-0 top-0">
          <div className="flex flex-col h-full relative">
            {/* Sub Nav */}
            <SubnavContext.Provider value={{ tableId: tableId ? +tableId : 0 }}>
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
