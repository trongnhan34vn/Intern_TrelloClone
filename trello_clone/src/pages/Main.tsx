import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { tableSelector } from '../redux/selectors';

export default function Main() {
  // Init toast
  const notify = () =>
    toast.success('Create Table Success!', {
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  // get table just added
  const tableJustAdded = useSelector(tableSelector).latestTable;
  useEffect(() => {
    if (tableJustAdded) {
      setTimeout(() => {
        notify();
      }, 2000);
    }
  }, [tableJustAdded]);

  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}
