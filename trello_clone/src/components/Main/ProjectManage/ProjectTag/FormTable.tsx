import React from 'react';

interface Form {
  closeFn: () => void;
}

export default function FormTable({ closeFn }: Form) {
  return (
    <div
      className={`w-[304px] absolute z-10 transition-all ease-in-out duration-200 overflow-hidden rounded-[8px] min-h-fit bg-[#282E33] h-[390px] top-1/2 left-full`}
    >
      <button
        onClick={() => closeFn()}
        className="absolute z-10 top-1 right-1 text-[#B6C2CF] py-1 px-2"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="text-sm font-bold text-[#B6C2CF]">
        <h2 className="h-10 text-center leading-10">Tạo bảng</h2>
      </div>
      <div className="p-3">
        <div className="h-full flex justify-center pb-2">
          <div className="bg-[url(https://images.unsplash.com/photo-1688934728322-597cbe61ef57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjg5MDA2MTU2fA&ixlib=rb-4.0.3&q=80&w=400)] w-[200px] h-[120px] bg-center bg-cover rounded-[3px] flex items-center justify-center shadow-lg">
            <div className="bg-[url(https://trello.com/assets/14cda5dc635d1f13bc48.svg)] bg-no-repeat bg-center w-full h-full"></div>
          </div>
        </div>
        <form className="h-full">
          <div className="h-full">
            <label className="block mb-1 mt-3 font-bold text-[12px] text-[#B6C2CF]">
              Tiêu đề bảng <span className="text-red-600">*</span>
            </label>
            <input
              className="mt-[2px] border-[2px] border-[#A6C5E229] bg-[#22272B] text-[#B6C2CF] outline-[#EF5C48] text-sm leading-5 w-full py-1 px-2 rounded-[3px]"
              type="text"
            />
          </div>
          <div className="h-full">
            <label className="block mb-1 mt-3 font-bold text-[12px] text-[#B6C2CF]">
              Không gian làm việc <span className="text-red-600">*</span>
            </label>
            <select className="mt-[2px] border-[2px] border-[#A6C5E229] bg-[#22272B] text-[#B6C2CF] outline-[#EF5C48] text-sm leading-5 w-full py-1 px-2 rounded-[3px]">
              <option value="">Chọn...</option>
            </select>
          </div>
          <div>
            <button className="w-full font-semibold mb-2 mt-4 text-sm leading-5 rounded-[3px] py-[6px] px-3 bg-[#579DFF]">
              Tạo mới
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
