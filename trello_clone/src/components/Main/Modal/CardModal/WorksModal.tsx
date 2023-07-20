import React from 'react';
import WorkModal from './WorkModal';

export default function WorksModal() {
  return (
    <div className="item">
      <div className="flex text-[#9FADBC] justify-between items-center mb-2">
        <div className="flex items-center">
          <i className="fa-regular fa-square-check mr-3 text-[20px]"></i>
          <h2 className="text-[18px] font-semibold">Học Java</h2>
        </div>
        <div>
          <button className="rounded-[3px] text-[14px] py-[6px] px-3 bg-[#3A444C]">
            Xoá
          </button>
        </div>
      </div>
      <div className="mb-10 w-full">
        {/* title */}
        <div className="flex items-center mb-2">
          <div>
            <div className="text-[#9FADBC] text-[12px] max-w-[30px]">0%</div>
          </div>
          <div className="w-full ml-[10px]">
            <div className="rounded-[4px] h-2 w-full overflow-hidden relative bg-[#3A444C]">
              <div className="rounded-[4px] h-2 w-full overflow-hidden absolute top-0 left-0 -translate-x-1/2 bg-green-400"></div>
            </div>
          </div>
        </div>
        {/* title */}
        {/* work */}
        <WorkModal />
        {/* work */}
      </div>
    </div>
  );
}
