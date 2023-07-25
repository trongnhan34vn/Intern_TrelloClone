import React from 'react';

const FormShare = () => {
  return (
    <form>
      <div className="flex items-center">
        <input
          placeholder="Địa chỉ email hoặc tên"
          type="text"
          className="bg-[#22272B] text-[14px] mr-2 border-[2px] rounded-[3px] min-h-[32px] outline-none border-[#A6C5E229] py-[6px] pr-1 pl-3 max-w-[341px] w-full text-[#B6C2CF]"
        />
        <button className="flex mr-2 rounded-[3px] px-[10px] py-1 bg-[#A1BDD914] h-[37px] text-[#B6C2CF] items-center">
          <span className="text-[14px] leading-[32px] mr-1">Thành viên</span>
          <i className="fa-solid text-[12px] fa-angle-down"></i>
        </button>
        <button className="bg-[#579DFF] rounded-[3px] h-[37px] text-[14px] py-[6px] px-[12px]">
          Chia sẻ
        </button>
      </div>
    </form>
  );
};

export default FormShare;
