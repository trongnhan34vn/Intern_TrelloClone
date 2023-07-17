import React, { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Background from '../../components/Login_Register/Background';
import Logo from '../../components/Login_Register/Logo';
import LoadingOverlay from 'react-loading-overlay-ts';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/selectors';
import { User } from '../../types/User.type';

export default function AuthenLayout() {
  const [isActive, setActive] = useState<boolean>(false);
  const token : string | null = useSelector(userSelector).accessToken;
  const userLogin : User | null = useSelector(userSelector).user;

  useEffect(() => {
    if(userLogin) {
      localStorage.setItem('userLogin', JSON.stringify(userLogin));
    }
  },[userLogin])

  useEffect(() => {
    if (token) {
      setActive(true);
    }
  }, [token]);

  useEffect(() => {
    setTimeout(() => {
      if(isActive) {
        setActive(false);
      }
    }, 3000);
  }, [isActive]);
  return (
    <LoadingOverlay 
      classNamePrefix='fixed'
      active={isActive}
      spinner
      text="Loading..."
    >
      <div>
        <Logo />
        <Outlet />
        <Background />
      </div>
    </LoadingOverlay>
  );
}
