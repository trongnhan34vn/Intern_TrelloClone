import React, { createContext, useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Background from '../../components/Login_Register/Background';
import Logo from '../../components/Login_Register/Logo';
import LoadingOverlay from 'react-loading-overlay-ts';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/selectors';
import { User } from '../../types/User.type';

interface LoadingContext {
  setActive: () => void;
  setInActive: () => void;
}

export const LoadingContext = createContext<LoadingContext | null>(null);

export default function AuthenLayout() {
  const [isActive, setActive] = useState<boolean>(false);
  const userLogin: User | null = useSelector(userSelector).loginResponse.user;

  useEffect(() => {
    if (userLogin) {
      localStorage.setItem('userLogin', JSON.stringify(userLogin));
    }
  }, [userLogin]);

  return (
    <LoadingOverlay
      classNamePrefix="fixed"
      active={isActive}
      spinner
      text="Loading..."
    >
      <div>
        <LoadingContext.Provider
          value={{
            setActive: () => setActive(true),
            setInActive: () => setActive(false),
          }}
        >
          <Logo />
          <Outlet />
          <Background />
        </LoadingContext.Provider>
      </div>
    </LoadingOverlay>
  );
}
