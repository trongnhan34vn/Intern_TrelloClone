import React, { Fragment, useContext, useEffect, useState } from 'react';
import ShareModal from '../Modal/ShareModal/ShareModal';
import { SubnavContext } from '../DetailProject/DetailProject';
import { useDispatch, useSelector } from 'react-redux';
import * as memberSlice from '../../../redux/reducers/memberSlice';
import { memberSelector, userSelector } from '../../../redux/selectors';
import MemberImages from './MemberImages';
import { Popover, Transition } from '@headlessui/react';
import FilterDropDown from './FilterDrop/FilterDropDown';

export default function SubNav() {
  const [shareModal, setShareModal] = useState<boolean>(false);
  const subNavContext = useContext(SubnavContext);

  const returnTableName = () => {
    if (!subNavContext) return;
    if (!subNavContext.selectTable) return;
    return subNavContext.selectTable.name;
  };

  const members = subNavContext ? subNavContext.members : [];

  const membersElement = members.map((member) => {
    if (member.cardId === undefined)
      return <MemberImages key={member.id} member={member} />;
  });

  return (
    <div className="bg-[#0000003d] z-50">
      <div className="flex-nowrap justify-between h-auto relative inline-flex flex-row gap-1 w-[calc(100%_-_23px)] items-center py-3 pr-[10px] pl-[16px] ">
        <h2 className="flex-nowrap font-bold text-lg px-[10px] text-[#fff] cursor-default relative flex items-start h-8 max-w-full">
          {returnTableName()}
        </h2>
        <div className="flex items-center">
          <Popover className="relative">
            <Popover.Button className="mr-5 flex items-center outline-none">
              <i className="fa-solid fa-filter mr-1"></i>
              <span>Lọc</span>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              {/* Mark this component as `static` */}
              <Popover.Panel className="z-[999]">
                {({ close }) => <FilterDropDown close={close} />}
              </Popover.Panel>
            </Transition>
          </Popover>
          {/* List member (img) */}
          <div className={`mr-2 flex relative `}>{membersElement}</div>
          <button
            onClick={() => setShareModal(true)}
            className="hover:opacity-80 transition-all duration-200 ease-in bg-[#091e42e3] max-w-[400px] h-8 rounded-[3px] py-[6px] px-[12px] flex items-center text-[#fff]"
          >
            <i className="text-[12px] fa-solid fa-user-plus mr-1"></i>
            <span className="text-[14px]">Chia sẻ</span>
          </button>
        </div>
      </div>
      <ShareModal
        shareModal={shareModal}
        onClose={() => setShareModal(false)}
      />
    </div>
  );
}
