import { Dialog } from '@headlessui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findListById } from '../../../../../redux/reducers/listSlice';
import { listSelector } from '../../../../../redux/selectors';
import { CardDB } from '../../../../../types/Card.type';

interface HeadModalProps {
  onClose: () => void
  selectCard: CardDB | null
}

const HeadModal = ({onClose, selectCard}: HeadModalProps ) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (!selectCard) return
    dispatch(findListById(selectCard.listId))
  },[selectCard])

  const selectList = useSelector(listSelector).selectList;

  return (
    <Dialog.Title
      as="h3"
      className="text-lg font-medium leading-6 text-gray-900"
    >
      <div className="absolute top-2 right-[1em]">
        <button
          className="hover:bg-[#A1BDD914] outline-none px-2 py-1 rounded-2xl"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark text-[#9FADBC] "></i>
        </button>
      </div>
      <div className="flex items-center mb-2">
        <i className="fa-solid fa-print text-[#9FADBC] "></i>
        <textarea
          className="mt-[-10px] overflow-hidden h-7 bg-[#0000] align-middle text-[20px] border-none rounded-[3px] text-[#9FADBC] font-bold my-[-4px] max-h-[256px] min-h-[20px] py-1 pr-2 pl-3 resize-none w-[224px]"
          value={selectCard ? selectCard.name : ''} 
          onChange={() => {}}
        ></textarea>
      </div>
      <div className="ml-7 mb-10">
        <p className="text-[#9FADBC] text-sm">
          trong danh sách{' '}
          <a className="underline" href="">
            {(selectList? selectList.name : '')}
          </a>{' '}
        </p>
      </div>
    </Dialog.Title>
  );
};

export default HeadModal;
