import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { notifySelector, tableSelector } from '../redux/selectors';
import * as notifySlice from '../redux/reducers/notifySlice';

export default function Main() {
  const notifyMessage = useSelector(notifySelector).notify;
  // Init toast
  const notifySuccess = () =>
    toast.success(notifyMessage, {
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#282E33',
        color: '#fff',
        textAlign: 'center',
      },
    });

    const notifyError = () =>
    toast.error(notifyMessage, {
      // icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#282E33',
        color: '#fff',
        textAlign: 'center',
      },
    });
  // get table just added
  const dispatch = useDispatch();
  const tableJustAdded = useSelector(tableSelector).latestTable;
  useEffect(() => {
    if (tableJustAdded && notifyMessage.length !== 0) {
      setTimeout(() => {
        dispatch(notifySlice.notify('Create table successfully!'));
        notifySuccess();
      }, 2000);
    }
  }, [tableJustAdded]);

  useEffect(() => {
    if (notifyMessage.length !== 0) {
      notifyError();
    }
  }, [notifyMessage]);

  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}
