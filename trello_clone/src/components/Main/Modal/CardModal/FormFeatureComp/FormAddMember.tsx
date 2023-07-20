import React from 'react';

export default function FormAddMember() {
  return (
    <form className="">
      <div className="">
        <input
          // onChange={handleChange}
          name="name"
          // value={inputValue.name}
          className="mt-[2px] border-[2px] border-[#A6C5E229] bg-[#22272B] text-[#B6C2CF] outline-[#EF5C48] text-sm leading-5 w-full py-1 px-2 rounded-[3px]"
          type="text"
          placeholder="Tìm kiếm Thành viên"
        />
      </div>
      <div className="">
        <label className="block mb-3 mt-3 font-bold text-[12px] text-[#B6C2CF]">
          Thành viên của bảng <span className="text-red-600">*</span>
        </label>
        <div className="flex flex-col">
          {/* select item */}
          <div className="flex items-center cursor-pointer hover:bg-[#A6C5E229] p-2 rounded-[4px]">
            <div className="bg-red-500 w-8 h-8 rounded-[50%] flex items-center text-[#fff] mr-2 justify-center">
              <span>NN</span>
            </div>
            <p className="text-[#B6C2CF] text-[14px]">
              Nam béo (nambeo@gmail.com)
            </p>
          </div>
          {/* select item */}
           {/* select item */}
           <div className="flex items-center cursor-pointer hover:bg-[#A6C5E229] p-2 rounded-[4px]">
            <div className="bg-red-500 w-8 h-8 rounded-[50%] flex items-center text-[#fff] mr-2 justify-center">
              <span>NN</span>
            </div>
            <p className="text-[#B6C2CF] text-[14px]">
              Nam béo (nambeo@gmail.com)
            </p>
          </div>
          {/* select item */}
        </div>
      </div>
    </form>
  );
}
