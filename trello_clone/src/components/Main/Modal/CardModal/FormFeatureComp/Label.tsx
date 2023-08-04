import React from 'react';
import { Label } from '../../../../../types/Label.type';
import { EditLabel } from './EditLabel';

interface LabelProps {
  label: Label;
  selectInputs: number[];
  handleClick: (labelId: number) => void;
}

const LabelComp = ({ label, selectInputs, handleClick }: LabelProps) => {
  return (
    <div
      key={label.id}
      className="flex w-full transition-all ease-in duration-150  cursor-pointer items-center mb-1"
    >
      <div
        onClick={() => handleClick(label.id)}
        className="hover:opacity-80 flex w-full transition-all ease-in duration-150 "
      >
        <input
          onChange={() => {}}
          checked={selectInputs.includes(label.id)}
          type="checkbox"
        />
        <div
          style={{ backgroundColor: `${label.code}` }}
          className={`ml-3 mr-3 flex-1 rounded-[3px] h-8 px-3`}
        ></div>
      </div>
      <div>
        <EditLabel />
      </div>
    </div>
  );
};

export default LabelComp;
