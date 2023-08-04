import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cardLabelSlice from '../../../../../redux/reducers/cardLabelSlice';
import { searchByName } from '../../../../../redux/reducers/labelSlice';
import { labelSelector } from '../../../../../redux/selectors';
import { SubnavContext } from '../../../DetailProject/DetailProject';
import { CardContext } from '../CardModal';
import AddLabelForm from './AddLabelForm';
import LabelComp from './Label';

const AddLabel = () => {
  const dispatch = useDispatch();
  const subNavContext = useContext(SubnavContext);
  const labels = subNavContext ? subNavContext.labels : [];
  const selectCard = useContext(CardContext);
  const cardLabels = subNavContext ? subNavContext.cardLabels : [];

  const cardLabelFilterByCard = selectCard
    ? cardLabels.filter((cl) => cl.cardId === selectCard.id)
    : [];

  const checkExist = (labelId: number) => {
    return cardLabelFilterByCard.find((cl) => cl.labelId === labelId);
  };

  const [isSearch, setIsSearch] = useState<boolean>(false);
  const labelSearch = useSelector(labelSelector).search;

  const labelStream = isSearch ? labelSearch : labels;

  const [selectInputs, setSelectInputs] = useState<number[]>([]);

  useEffect(() => {
    let arr = selectInputs;
    for (let i = 0; i < cardLabelFilterByCard.length; i++) {
      arr.push(cardLabelFilterByCard[i].labelId);
    }
    setSelectInputs(arr);
  }, []);

  const handleClick = (id: number) => {
    if (!selectCard) return;
    let inputRefs = [...selectInputs];
    let index = inputRefs.indexOf(id);
    if (index >= 0) {
      inputRefs.splice(index, 1);
    } else {
      inputRefs.push(id);
    }
    setSelectInputs(inputRefs);

    if (!checkExist(id)) {
      dispatch(cardLabelSlice.create({ labelId: id, cardId: selectCard.id }));
    } else {
      let check = checkExist(id);
      if (!check) return;
      dispatch(cardLabelSlice.remove(check.id));
    }
  };

  const labelElement = labelStream.map((label) => {
    return (
      <LabelComp
        label={label}
        selectInputs={selectInputs}
        handleClick={handleClick}
      />
    );
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchByName(e.target.value));
    if (e.target.value.trim() !== '') {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  };

  const [isAddLabel, setAddLabel] = useState<boolean>(false);

  return (
    <div>
      {(!isAddLabel) ? <div className="label">
        <input
          onChange={handleChange}
          className="text-[14px] w-full text-[#B6C2CF] leading-5 font-normal bg-[#22272B] border-[#A6C5E229] border-[2px] px-3 py-2"
          type="text"
          placeholder="Tìm nhãn..."
        />
        <h4 className="mt-3 mb-2 text-[12px] text-[#9FADBC] font-bold">Nhãn</h4>
        <div>{labelElement}</div>
        <div>
          <button
            onClick={() => setAddLabel(true)}
            className="my-1 w-full rounded-[3px] px-3 py-[6px] bg-[#A1BDD914] text-[14px] text-[#9FADBC]"
          >
            Tạo nhãn mới
          </button>
        </div>
      </div> : <AddLabelForm handleClick={handleClick} labels={labels} setAddLabel={setAddLabel} />} 
    </div>
  );
};

export default AddLabel;
