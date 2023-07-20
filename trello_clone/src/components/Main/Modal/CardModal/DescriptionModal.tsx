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
        <form>
          <textarea placeholder='Điền vào mô tả công việc...' className='h-[223px] w-full resize-none outline-none p-5 bg-[#22272B] text-[#B6C2CF] text-[14px]'></textarea>
          <div className='text-[14px]'>
            <button className='bg-[#579DFF] opacity-80 hover:opacity-100 transition-all ease-in duration-200 mr-2 text-[#1D2125] font-normal mb-2 mt-2 text-sm leading-5 rounded-[3px] py-[6px] px-3'>Lưu</button>
            <button className='text-[#9FADBC] hover:bg-[#A6C5E229] transition-all ease-in duration-200 rounded-[3px] text-[14px] py-[6px] px-3'>Huỷ</button>
          </div>
        </form>
      </div>
    </div>
  );
}
