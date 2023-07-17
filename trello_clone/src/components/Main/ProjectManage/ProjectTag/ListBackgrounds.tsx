import React, { useContext, useEffect } from 'react';
import Background from './Background';
import { BGContext } from './CreateTableBtn';

export default function ListBackgrounds() {
  const listBGs = useContext(BGContext);

  const listBGElements = listBGs.map((item) => {
    return <Background key={item.id} bgUrl={item.bgUrl} bgId={item.id} />;
  });

  return <div className="grid grid-cols-4 gap-1 mb-1">{listBGElements}</div>;
}
