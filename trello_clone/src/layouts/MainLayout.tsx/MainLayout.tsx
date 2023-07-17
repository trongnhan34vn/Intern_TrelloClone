import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../components/Main/Navbar/Navbar';
import SideMenu from '../../components/Main/SideMenu/SideMenu';
import SideMenu_Detail from '../../components/Main/SideMenu/SideMenu_Detail';

export default function MainLayout() {
  const location = useLocation();
  const isMainApp: boolean =
    location.pathname === '/main-app/project-manage' ||
    location.pathname === '/main-app';

  const [toggleProfleDropdown, setToggleProfileDropdown] =
    useState<boolean>(false);

  const handleToggleProfileDropdown = () => {
    setToggleProfileDropdown((pre) => !pre);
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const sideMenuElement = isMainApp ? (
    <SideMenu isOpen={isOpen} openModal={openModal} closeModal={closeModal} />
  ) : (
    <SideMenu_Detail />
  );

  const isDetail = location.pathname.match('/main-app/detail-project/*');
  return (
    <div className="bg-[#1D2125] h-[calc(100vh)] w-full">
      <Navbar
        openModal={openModal}
        isOpen={isOpen}
        toggleFn={handleToggleProfileDropdown}
        state={toggleProfleDropdown}
      />
      <div
        onClick={() => {
          setToggleProfileDropdown(false);
        }}
        className={`${isDetail ? '' : 'mx-auto w-[1125px]'}`}
      >
        <div className={`${isDetail ? 'overflow-hidden' : 'overflow-y-scroll'} sticky-container scrollable-div h-[calc(100vh_-_80px)] w-full relative flex justify-center items-start`}>
          <div className="w-full flex">
            {sideMenuElement}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
