import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Modal from '../../components/Main/Modal/Modal';
import Navbar from '../../components/Main/Navbar/Navbar';
import SideMenu from '../../components/Main/SideMenu/SideMenu';
import SideMenu_Detail from '../../components/Main/SideMenu/SideMenu_Detail';
import { closeFormTable } from '../../redux/reducers/tableSlice';

export default function MainLayout() {
  const location = useLocation();
  const isMainApp =
    location.pathname === '/main-app/project-manage' ||
    location.pathname === '/main-app';
  const [toggleProfleDropdown, setToggleProfileDropdown] = useState(false);
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
  return (
    <div
      className="bg-[#1D2125] min-h-screen w-full"
    >
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
        className="mx-auto w-[1125px] h-[calc(100vh_-_64px)]"
      >
        <div className="sticky-container w-full h-[calc(100vh_-_64px)] relative flex justify-center items-start">
          <div className="w-full flex">
            {sideMenuElement}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
