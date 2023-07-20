import React, { useState } from 'react';

const FormDate = () => {
  const [inputValue, setInputValue] = useState({ name: '' });

  const handleSubmit = () => {};

  const activeButton = () => {
    if (inputValue?.name.trim() !== '') {
      return true;
    }
    return false;
  };
  return (
    <form className="">
      <div className="mb-3">
        <label className="block mb-1 mt-3 font-bold text-[12px] text-[#B6C2CF]">
          Ngày bắt đầu
        </label>
        <input
          // onChange={handleChange}
          name="name"
          // value={inputValue.name}
          className="mt-[2px] border-[2px] border-[#A6C5E229] bg-[#22272B] text-[#B6C2CF] outline-[#EF5C48] text-sm leading-5 w-full py-1 px-2 rounded-[3px]"
          type="datetime-local"
          placeholder="Tìm kiếm Thành viên"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1 mt-3 font-bold text-[12px] text-[#B6C2CF]">
          Ngày kết thúc
        </label>
        <input
          // onChange={handleChange}
          name="name"
          // value={inputValue.name}
          type="datetime-local"
          className="mt-[2px] border-[2px] border-[#A6C5E229] bg-[#22272B] text-[#B6C2CF] outline-[#EF5C48] text-sm leading-5 w-full py-1 px-2 rounded-[3px]"
          placeholder="Tìm kiếm Thành viên"
        />
      </div>
      <div className="">
        <button
          disabled={!activeButton()}
          onClick={handleSubmit}
          className={`
              ${
                activeButton()
                  ? 'bg-[#579DFF] text-[#1D2125]'
                  : 'text-[#BFDBF847] bg-[#BCD6F00A] cursor-not-allowed'
              }
              w-full font-normal mb-2 mt-4 text-sm leading-5 rounded-[3px] py-[6px] px-3 bg-[#579DFF]`}
        >
          <span>Tiếp tục</span>
        </button>
      </div>
    </form>
  );
};

export default FormDate;
