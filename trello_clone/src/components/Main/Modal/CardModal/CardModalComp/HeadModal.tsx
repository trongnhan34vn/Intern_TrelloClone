import { Dialog } from '@headlessui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findListById } from '../../../../../redux/reducers/listSlice';
import { listSelector } from '../../../../../redux/selectors';
import { CardDB, CardUpdateName } from '../../../../../types/Card.type';
import * as cardSlice from '../../../../../redux/reducers/cardSlice';

interface HeadModalProps {
  onClose: () => void;
  selectCard: CardDB | null;
  cardId?: string | null;
}

const HeadModal = ({ onClose, selectCard, cardId }: HeadModalProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectCard) return;
    dispatch(findListById(selectCard.listId));
    setInputValue(selectCard.name);
  }, [selectCard]);

  const selectList = useSelector(listSelector).selectList;
  const ref: any = useRef();

  const [inputValue, setInputValue] = useState<string>('');

  const updateCardName = () => {
    if(!selectCard) return;
    if(inputValue.trim() !== '') {
      let card = {
        id: selectCard.id,
        name: inputValue
      }
      dispatch(cardSlice.updateCardName(card))
    }
  };

  useEffect(() => {
    if(!cardId) {
      updateCardName()
    }
  },[cardId])

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
          value={inputValue}
          ref={ref}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="ml-7 mb-8">
        <p className="text-[#9FADBC] text-sm">
          trong danh sách{' '}
          <a className="underline" href="#">
            {selectList ? selectList.name : ''}
          </a>{' '}
        </p>
      </div>
    </Dialog.Title>
  );
};

export default HeadModal;
