import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { notifySelector, tableSelector } from '../redux/selectors';
import * as notifySlice from '../redux/reducers/notifySlice';
import { Notify } from '../types/Notify.type';

export default function Main() {
  const notifyEntity = useSelector(notifySelector).notify;
  
  // Init toast
  const getNotifications = () => {
    if (!notifyEntity) return;
    console.log(notifyEntity);
    
    if (notifyEntity.type === 'success') {
      return toast.success(notifyEntity.message, {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#282E33',
          color: '#fff',
          textAlign: 'center',
        },
      });
    }
    return toast.error(notifyEntity.message, {
      // icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#282E33',
        color: '#fff',
        textAlign: 'center',
      },
    });
  };
  // get table just added
  const dispatch = useDispatch();
  const tableJustAdded = useSelector(tableSelector).latestTable;

  useEffect(() => {
    if (tableJustAdded) {
      let notify: Notify = {
        type: 'success',
        message: 'Create table successfully!',
      };
      setTimeout(() => {
        dispatch(notifySlice.notify(notify));
        // getNotifications();
      }, 2000);
    }
  }, [tableJustAdded]);

  useEffect(() => {
    if (!notifyEntity) return;
    getNotifications();
  }, [notifyEntity]);

  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}
