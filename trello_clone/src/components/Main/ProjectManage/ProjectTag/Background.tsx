import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBGId } from '../../../../redux/reducers/backgroundSlice';
import { backgroundSelector } from '../../../../redux/selectors';

export default function Background(props: { bgUrl: string; bgId: number }) {
  const dispatch = useDispatch()
  const [selectBG, setSelectBG] = useState<number>(0)
  const handleSelectBG = (
    id: number,
    e: React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    dispatch(selectBGId(id));
  };
  
  return (
    <button
      onClick={(e) => handleSelectBG(props.bgId, e)}
      style={{ backgroundImage: 'url(' + props.bgUrl + ')' }}
      className={`
      hover:opacity-100 opacity-75 block bg-center bg-no-repeat bg-cover rounded-[3px] w-[64px] h-[40px]`}
    ></button>
  );
}
