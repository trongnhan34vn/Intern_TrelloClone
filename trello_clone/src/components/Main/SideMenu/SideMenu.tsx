import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import FormProject from '../Modal/FormProject';

export default function SideMenu(props: {
  isOpen: any;
  openModal: any;
  closeModal: any;
}) {
  const location = useLocation();
  return (
    <div className="side sticky h-[500px] top-2">
      <nav className="mt-10 px-4 w-[272px]">
        <ul className="side-container border-b-[1px] border-b-[#091e4224]">
          <li className="side-item mb-1">
            <NavLink
              className={`${
                location.pathname === '/main-app/project-manage'
                  ? 'bg-[#092957] text-[#579DFF]'
                  : 'text-[#B6C2CF]'
              }  font-bold h-min-[20px] items-center rounded-[4px] py-[6px] px-2 flex hover:bg-[#A6C5E229]`}
              to={'/main-app/project-manage'}
            >
              <i className="fa-solid fa-table mr-2"></i>
              Bảng
            </NavLink>
          </li>
          <li className="side-item mb-1">
            <a
              className="text-[#B6C2CF] font-bold h-min-[20px] items-center rounded-[4px] py-[6px] px-2 flex hover:bg-[#A6C5E229]"
              href=""
            >
              <i className="fa-solid fa-chart-simple mr-2"></i>
              Mẫu
            </a>
          </li>
          <li className="side-item mb-1">
            <NavLink
              className={`${
                location.pathname === '/main-app'
                  ? 'bg-[#092957] text-[#579DFF]'
                  : 'text-[#B6C2CF]'
              } font-bold h-min-[20px] items-center rounded-[4px] py-[6px] px-2 flex hover:bg-[#A6C5E229]`}
              to={'/main-app'}
            >
              <i className="fa-solid fa-house mr-2"></i>
              Trang chủ
            </NavLink>
          </li>
        </ul>
        <ul className="task-manage pt-3 pb-10">
          <div className="insert-task flex">
            <div className="items-baseline h-8 flex justify-start pl-2">
              <p className="text-xs font-semibold leading-4 text-[#B6C2CF] flex-1 py-2">
                Các Không gian làm việc
              </p>
            </div>
            <button
              onClick={() => props.openModal()}
              className="w-[22px] text-[#B6C2CF] hover:bg-[#A6C5E229] h-[22px] mt-[6px] flex items-center justify-center ml-auto rounded-[4px]"
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <li className="mb-1 flex items-center rounded-[4px] hover:bg-[#A6C5E229]">
            <a
              href=""
              className="flex items-center relative text-[#B6C2CF] rounded-[4px] leading-tight font-bold min-h-[20px] py-[6px] pl-2"
            >
              <div className="left-0 top-0 mr-3">
                <div className="rounded-[3px] h-6 w-6 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center w-full h-full text-[16px] font-bold text-[#1D2125]">
                    K
                  </div>
                </div>
              </div>
              <span className="text-[14px]">
                Không gian làm việc của anh Nam Gucci
              </span>
            </a>
            <button className="w-[22px] h-[22px] text-[#B6C2CF] pr-2 mt-[6px] flex items-center justify-center ml-auto rounded-[4px]">
              <i className="fa-solid fa-angle-down"></i>
            </button>
          </li>
        </ul>
        <FormProject isOpen={props.isOpen} closeModal={props.closeModal} />
      </nav>
    </div>
  );
}
