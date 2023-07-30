import React from 'react';

const Item = () => {
  return (
    <div className="title h-[41px] mr-[15px] ml-[15px] flex border-b-[0.5px] border-b-[#333B43]">
      <div className="w-[calc(32%_-_20px)] text-[14px] text-[#9FADBC] p-2 font-medium inline-flex items-center">
        <div className="flex">
          <img className="w-8 mr-2 rounded-[3px] h-5" src="" alt="" />
          <span>Thẻ</span>
        </div>
      </div>
      <div className="w-[17%] text-[#9FADBC] p-2 font-medium inline-flex items-center text-[14px]">
        <span>Nam Gucci</span>
      </div>
      <div className="w-[17%] text-[#9FADBC] p-2 font-medium inline-flex items-center text-[14px]">
        <span className=""></span>
      </div>
      <div className="w-[17%] text-[#9FADBC] p-2 font-medium inline-flex items-center text-[14px]">
        <span>
          <img className="rounded-[50%] w-[28px] h-[28px]" src="" alt="" />
        </span>
      </div>
      <div className="w-[17%] text-[#9FADBC] p-2 font-medium inline-flex items-center text-[14px]">
        <span></span>
      </div>
    </div>
  );
};

export default Item;
