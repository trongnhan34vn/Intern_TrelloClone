import React, { SetStateAction, useContext, useEffect, useState } from 'react';
import Background from './Background';
import { BGContext } from './CreateTableBtn';

interface ListBackgroundsProps {
  selectBG: number
  setSelectBG: React.Dispatch<SetStateAction<number>>
}


export default function ListBackgrounds({selectBG, setSelectBG}: ListBackgroundsProps) {
  const listBGs = useContext(BGContext);

  const listBGElements = listBGs.map((item) => {
    return <Background selectBG={selectBG} setSelectBG={setSelectBG} key={item.id} bgUrl={item.bgUrl} bgId={item.id} />;
  });

  return <div className="grid grid-cols-4 gap-1 mb-1">{listBGElements}</div>;
}
