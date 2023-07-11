import React, { Fragment, useEffect, useState } from 'react';
import FormTable from './FormTable';
import { Menu, Transition } from '@headlessui/react';

export default function ProjectTag() {
  return (
    <div className="task-item pb-5 max-w-[1266px]">
      <div className="flex ml-10 pb-[11px] relative">
        <div className="left-[-40px] absolute top-0">
          <div className="rounded-[3px] h-8 w-8 overflow-hidden mb-4">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center w-full h-full text-[20px] font-bold text-[#1D2125]">
              K
            </div>
          </div>
        </div>
        <h3 className="w-[200px] inline-block overflow-hidden text-base text-[#B6C2CF] whitespace-nowrap font-bold mt-[3px] text-ellipsis	">
          Không gian làm việc của anh Nam Gucci
        </h3>
        <div className="flex flex-wrap ml-2 whitespace-nowrap">
          <a
            className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] text-[#B6C2CF] inline-block mb-2 ml-2 py-[6px] pl-[6px] pr-3"
            href=""
          >
            <i className="fa-solid fa-table mr-[8px]"></i>
            <span className="text-[14px] font-semibold">Bảng</span>
          </a>
          <a
            className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] text-[#B6C2CF] inline-block mb-2 ml-2 py-[6px] pl-[6px] pr-3"
            href=""
          >
            <i className="fa-solid fa-chart-pie mr-[8px]"></i>
            <span className="text-[14px] font-semibold">Dạng xem</span>
          </a>
          <a
            className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] text-[#B6C2CF] inline-block mb-2 ml-2 py-[6px] pl-[6px] pr-3"
            href=""
          >
            <i className="fa-regular fa-user mr-[8px]"></i>
            <span className="text-[14px] font-semibold">Thành viên</span>
          </a>
          <a
            className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] text-[#B6C2CF] inline-block mb-2 ml-2 py-[6px] pl-[6px] pr-3"
            href=""
          >
            <i className="fa-solid fa-gear mr-[8px]"></i>
            <span className="text-[14px] font-semibold">Cài đặt</span>
          </a>
        </div>
      </div>
      <div>
        <ul className="flex flex-wrap justify-starts">
          <Menu as="div" className="relative">
            <li className="mb-[2%] mr-[2%] relative cursor-pointer list-none">
              <Menu.Button>
                <div className="hover:bg-[#A6C5E229] transition-all ease-in-out duration-150 rounded-[3px] font-normal bg-[#A1BDD914] h-[96px] text-center align-middle p-2 bg-cover table-cell w-[200px]">
                  <p className="text-[#B6C2CF] font-semibold text-[14px]">
                    Tạo bảng mới
                  </p>
                </div>
              </Menu.Button>
            </li>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute top-[-70%] left-full">
                <Menu.Item>
                  {({ close }) => <FormTable closeFn={close} />}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </ul>
      </div>
    </div>
  );
}
