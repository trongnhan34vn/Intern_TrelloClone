import React from 'react';

export default function SideMenu_Detail() {
  return (
    <div className="w-[260px] block bg-[hsla(206,13.7%,10%,0.9)] absolute h-[calc(100vh_-_64px)] left-0 top-0 z-10">
      <div className="flex items-center min-h-10 py-[8px] px-[12px] border-b-[1px] border-b-[hsla(211,18%,68%,0.16)]">
        <div className="w-8 h-8 flex items-center justify-center rounded-[3px] overflow-hidden ">
          <div className="bg-[#F87462] flex w-full h-full text-xl text-[#000] font-bold items-center justify-center">
            K
          </div>
        </div>
        <div className="flex-1 ml-2 mr-1 text-left">
          <span className="text-[#9FADBC] leading-5 text-sm font-semibold text-ellipsis overflow-hidden whitespace-pre-wrap">
            không gian làm việc của anh Nam Gucci
          </span>
          <p className="text-[#9FADBC] text-xs">Miễn phí</p>
        </div>
        <button className="flex items-center justify-center rounded-[3px] cursor-pointer p-[2px]">
          <i className="text-[#fff] font-bold fa-solid fa-angle-left"></i>
        </button>
      </div>
      <div className="text-sm font-semibold leading-5">
        <div className="pt-3">
          <a
            href=""
            className="flex text-[#9FADBC] transition-all ease-in-out duration-150 hover:bg-[#464247] items-center pl-4 h-8"
          >
            <i className="fa-solid fa-table"></i>
            <p className="ml-3 overflow-hidden text-ellipsis whitespace-nowrap">
              Bảng
            </p>
          </a>
          <a
            href=""
            className="flex justify-between mb-2 text-[#9FADBC] transition-all ease-in-out duration-150 hover:bg-[#464247] items-center pl-4 h-8"
          >
            <div className="flex items-center">
              <i className="fa-regular fa-user"></i>
              <p className="ml-3 overflow-hidden text-ellipsis whitespace-nowrap">
                Thành viên
              </p>
            </div>
            <button className="p-1 mx-[6px]">
              <i className="fa-solid fa-plus"></i>
            </button>
          </a>
        </div>
      </div>
      <div className="mt-[6px]">
        <div className="flex items-center py-4 pl-3">
          <h2 className="font-bold text-[14px] text-[#9FADBC]">
            Dạng xem không gian làm việc
          </h2>
        </div>
        <ul className="py-[2px]">
          <a
            href=""
            className="flex text-[14px] font-semibold text-[#9FADBC] transition-all ease-in-out duration-150 hover:bg-[#464247] items-center pl-4 h-8"
          >
            <i className="fa-solid fa-table"></i>
            <p className="ml-3 italic overflow-hidden text-ellipsis whitespace-nowrap">
              Bảng
            </p>
          </a>
          <a
            href=""
            className="flex text-[14px] font-semibold text-[#9FADBC] transition-all ease-in-out duration-150 hover:bg-[#464247] items-center pl-4 h-8"
          >
            <i className="fa-regular w-[14px] fa-calendar-days"></i>
            <p className="ml-3 italic overflow-hidden text-ellipsis whitespace-nowrap">
              Lịch
            </p>
          </a>
        </ul>
      </div>
      <div className="mt-[6px]">
        <div className="flex items-center text-sm text-[#9FADBC] justify-between py-1 pl-3">
          <h2 className="text font-bold ">Các bảng của bạn</h2>
          <div className="flex pr-[2px]">
            <button className="p-1 mx-[6px]">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <ul className="py-[2px]">
          <a
            href=""
            className="flex text-[14px] text-[#9FADBC] transition-all ease-in-out duration-150 hover:bg-[#464247] items-center pl-4 h-8"
          >
            <img src="" alt="ảnh" className='w-6 h-5 flex items-center justify-center pr-2 ' />
            <p className="ml-3 overflow-hidden text-ellipsis whitespace-nowrap">
              Nguyễn Nhân
            </p>
          </a>
          <a
            href=""
            className="flex text-[14px] text-[#9FADBC] transition-all ease-in-out duration-150 hover:bg-[#464247] items-center pl-4 h-8"
          >
            <img src="" alt="ảnh" className='w-6 h-5 flex items-center justify-center pr-2 ' />
            <p className="ml-3 overflow-hidden text-ellipsis whitespace-nowrap">
              Nam béo
            </p>
          </a>
        </ul>
      </div>
    </div>
  );
}
