import React from 'react';

export default function DescriptionModal() {
  return (
    <div className="item">
      <div className="flex text-[#9FADBC]  items-center mb-2">
        <i className="fa-solid mr-4 fa-align-left"></i>
        <h2 className="text-[18px]  font-semibold">Mô tả</h2>
      </div>
      <div className="ml-7 mb-10">
        <div className="bg-[#A1BDD914] hover:bg-[#A6C5E229] cursor-pointer text-sm py-2 px-3 h-[54px] rounded-[3px] text-[#9FADBC]">
          Thêm mô tả chi tiết...
        </div>
      </div>
    </div>
  );
}
