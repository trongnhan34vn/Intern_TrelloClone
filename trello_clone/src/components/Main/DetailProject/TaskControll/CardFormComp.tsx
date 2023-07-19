import React, { Component, useState } from 'react';
import { FormState } from 'react-trello-ts/dist/components/NewCardForm';

export default function CardFormComp(props: {
  laneId: string;
  onCancel: () => void;
  onAdd: (formState: FormState) => void;
}) {
  const [inputValue, setInputValue] = useState<FormState>({
    title: '',
    description: '',
    label: '',
    laneId: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let value = e.target.value;
    setInputValue({ ...inputValue, title: value, laneId: props.laneId });
  };

  return (
    <div className="create-tag py-[6px] transition-all ease-in-out duration-200 mb-2">
      <div className="w-full mb-[7px] bg-[#fff] pt-2 pr-2 pb-1 pl-3 shadow-[0_1px_1px_#091e4240] rounded-[8px] overflow-hidden h-14">
        <textarea
          onChange={handleChange}
          value={inputValue ? inputValue.title : ''}
          name="title"
          placeholder="Nhập tiêu đề cho thẻ này..."
          className="w-full h-full text-sm resize-none outline-none"
        ></textarea>
      </div>
      <div className="flex">
        <button
          onClick={() => props.onAdd(inputValue)}
          className="text-sm bg-[#0C66E4] rounded-[3px] py-[6px] px-3 text-[#fff]"
        >
          Thêm thẻ
        </button>
        <button
          onClick={props.onCancel}
          className="w-8 h-8 flex items-center justify-center"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
    </div>
  );
}
