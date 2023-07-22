import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import Spinner from '../../../../../assets/svg/Spinner';
import { createWork } from '../../../../../redux/reducers/workSlice';
import { WorkForm } from '../../../../../types/Work.type';
import { CardContext } from '../CardModal';
import { FeatureContext } from '../CreateFeatureBtn';

const workInitState: WorkForm = {
  cardId: 0,
  name: '',
  process: 0,
};

export default function FormWork() {
  const dispatch = useDispatch();
  const cardId = useContext(CardContext);
  const [inputValue, setInputValue] = useState<WorkForm>(workInitState);
  const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const featureContext = useContext(FeatureContext);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    if (!featureContext) return;
    e.preventDefault();
    setLoadingButton(true)
    setTimeout(() => {
      dispatch(createWork(inputValue));
      setLoadingButton(false);
      setInputValue(workInitState);
      featureContext.closeFn();
    }, 2000);
  };
  

  const activeButton = () => {
    if (inputValue.name.trim() !== '') {
      return true;
    }
    return false;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!cardId) return;
    setInputValue({ ...inputValue, name: e.target.value, cardId: +cardId });
  };
  return (
    <form className="">
      <div className="mb-3">
        <label className="block mb-1 mt-3 font-bold text-[12px] text-[#B6C2CF]">
          Tiêu đề
        </label>
        <input
          onChange={handleChange}
          name="name"
          value={inputValue.name}
          className="mt-[2px] border-[2px] border-[#A6C5E229] bg-[#22272B] text-[#B6C2CF] outline-[#EF5C48] text-sm leading-5 w-full py-1 px-2 rounded-[3px]"
          type="text"
          placeholder="Việc cần làm..."
        />
      </div>
      <div className="">
        <button
          disabled={!activeButton()}
          onClick={handleSubmit}
          className={`
              ${
                activeButton()
                  ? 'bg-[#579DFF] text-[#1D2125]'
                  : 'text-[#BFDBF847] bg-[#BCD6F00A] cursor-not-allowed'
              }
              w-full font-normal transition-all ease-in duration-200 mb-2 mt-4 text-sm leading-5 rounded-[3px] py-[6px] px-3 bg-[#579DFF]`}
        >
          {loadingButton ? (
            <span className="inline-flex items-center justify-center w-full h-full">
              <Spinner />
              <span className="text-[#fff]">Loading...</span>
            </span>
          ) : (
            <span>Tiếp tục</span>
          )}
        </button>
      </div>
    </form>
  );
}
