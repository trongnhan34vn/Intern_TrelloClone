import React, { useEffect, useState } from 'react';
import { Label, LabelForm } from '../../../../../types/Label.type';

interface AddLabelFormProps {
  labels: Label[];
  setAddLabel: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: (id: number) => void;
}

const AddLabelForm = ({
  handleClick,
  labels,
  setAddLabel,
}: AddLabelFormProps) => {
  const [selectLabel, setSelectLabel] = useState<Label | null>(null);

  const handleSelect = (label: Label) => {
    setSelectLabel(label);
  };

  const labelsFilter = labels.filter((label) => label.labelName?.trim() !== '');

  const checkActive = (labelId: number) => {
    if (!selectLabel) return;
    if (labelId === selectLabel.id) return true;
    return false;
  };

  const [inputValue, setInputValue] = useState<LabelForm | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectLabel) return;
    let labelName = e.target.value;
    setInputValue({
      name: selectLabel.name,
      code: selectLabel.code,
      labelName: labelName,
    });
  };
  useEffect(() => {
    if (!selectLabel) return;
    setInputValue({
      name: selectLabel.name,
      code: selectLabel.code,
    });
  }, [selectLabel]);

  console.log(inputValue);

  const handleSubmit = () => {
    if (!selectLabel) return;
    if (!inputValue) return;
    if (
      (inputValue.labelName?.trim() === '' ||
        inputValue.labelName === undefined) &&
      labels.find((label) => label.code === inputValue.code) !== undefined
    ) {
      handleClick(selectLabel.id);
    } else {
    }

    console.log('bắn đê');
  };

  const labelElement = labelsFilter.map((label) => {
    return (
      <div
        onClick={() => handleSelect(label)}
        key={label.id}
        style={{ backgroundColor: `${label.code}` }}
        className={`${
          checkActive(label.id) ? 'border-[2px] border-[#579DFF]' : ''
        } w-full h-9 rounded-[3px] cursor-pointer`}
      >
        {' '}
      </div>
    );
  });
  return (
    <div>
      <button
        onClick={() => setAddLabel(false)}
        className="absolute top-2 text-[#9FADBC]"
      >
        <i className="fa-solid text-[14px] fa-chevron-left"></i>
      </button>
      <div className="">
        <h3 className="text-[12px] font-bold mt-3 pb-2 text-[#9FADBC]">
          Tiêu đề
        </h3>
        <input
          onChange={handleChange}
          className="bg-[#22272B] text-[#9FADBC] leading-5 text-[14px] w-full border-[2px] border-[#A6C5E229] rounded-[3px] px-3 py-2"
          type="text"
        />
      </div>
      <div className="mb-2">
        <h3 className="text-[12px] font-bold mt-3 pb-2 text-[#9FADBC]">
          Chọn một màu
        </h3>
        <div className="grid-cols-3 grid gap-2 mb-3">{labelElement}</div>
      </div>
      <hr className="border-[#A6C5E229] my-3" />
      <button
        onClick={handleSubmit}
        disabled={selectLabel ? false : true}
        className={`${
          selectLabel
            ? 'bg-[#579DFF] text-[#1D2125]'
            : 'bg-[#BCD6F00A] text-[#9FADBC] cursor-not-allowed'
        } px-[12px] py-[6px] text-[14px] rounded-[3px] `}
      >
        Tạo mới
      </button>
    </div>
  );
};

export default AddLabelForm;
