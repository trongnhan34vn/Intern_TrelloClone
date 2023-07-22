import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from 'react-trello-ts/dist/types/Board';
import { updateCardDescription } from '../../../../../redux/reducers/cardSlice';
import { CardUpdateDescription } from '../../../../../types/Card.type';

export default function DescriptionModal(props: { cardId: string | null }) {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  
  const handleSetCloseEdit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditing(false);
  };

  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!props.cardId) return;
    let card: CardUpdateDescription = {
      id: +props.cardId,
      description: inputValue,
    };
    dispatch(updateCardDescription(card));
  };

  return (
    <div className="item">
      <div className="flex text-[#9FADBC]  items-center mb-2">
        <i className="fa-solid mr-4 fa-align-left"></i>
        <h2 className="text-[18px]  font-semibold">Mô tả</h2>
      </div>
      <div className={`ml-7 mb-10 relative`}>
        <div
          onClick={() => setEditing(true)}
          className={`${
            isEditing
              ? 'h-0 opacity-0 p-0 overflow-hidden'
              : 'h-[54px] opacity-100 py-2 px-3 '
          } transition-all ease-in duration-200 bg-[#A1BDD914] hover:bg-[#A6C5E229] cursor-pointer text-sm rounded-[3px] text-[#9FADBC]`}
        >
          Thêm mô tả chi tiết...
        </div>
        <form
          className={`${
            isEditing ? 'h-full opacity-100' : 'h-0 opacity-0 overflow-hidden'
          } transition-all ease-in duration-200`}
        >
          <textarea
            value={inputValue}
            onChange={handleChange}
            placeholder="Điền vào mô tả công việc..."
            className="h-[223px] w-full resize-none outline-none p-5 bg-[#22272B] text-[#B6C2CF] text-[14px]"
          ></textarea>
          <div className="text-[14px]">
            <button
              disabled={inputValue.length === 0 ? false : true}
              onClick={handleSubmit}
              className={`${
                inputValue.length === 0
                  ? 'text-[#BFDBF847] bg-[#BCD6F00A] cursor-not-allowed'
                  : 'bg-[#579DFF] text-[#1D2125]'
              } opacity-80 hover:opacity-100 transition-all ease-in duration-200 mr-2 font-normal mb-2 mt-2 text-sm leading-5 rounded-[3px] py-[6px] px-3`}
            >
              Lưu
            </button>
            <button
              onClick={handleSetCloseEdit}
              className="text-[#9FADBC] hover:bg-[#A6C5E229] transition-all ease-in duration-200 rounded-[3px] text-[14px] py-[6px] px-3"
            >
              Huỷ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
