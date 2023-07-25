import React, { useState } from 'react';
import ShareModal from '../Modal/ShareModal/ShareModal';

export default function SubNav() {
  const [shareModal, setShareModal] = useState<boolean>(false);

  return (
    <div className="bg-[#0000003d]">
      <div className="flex-nowrap justify-between h-auto relative inline-flex flex-row gap-1 w-[calc(100%_-_23px)] items-center py-3 pr-[10px] pl-[16px] ">
        <h2 className="flex-nowrap font-bold text-lg px-[10px] text-[#fff] cursor-default relative flex items-start h-8 max-w-full">
          Nam béo
        </h2>
        <button onClick={() => setShareModal(true)} className='hover:opacity-80 transition-all duration-200 ease-in bg-[#091e42e3] max-w-[400px] h-8 rounded-[3px] py-[6px] px-[12px] flex items-center text-[#fff]'>
          <i className="text-[12px] fa-solid fa-user-plus mr-1"></i>
          <span className='text-[14px]'>Chia sẻ</span>
        </button>
      </div>
      <ShareModal shareModal={shareModal} onClose={() => setShareModal(false)} />
    </div>
  );
}
