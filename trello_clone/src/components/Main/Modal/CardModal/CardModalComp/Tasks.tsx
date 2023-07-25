import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../../../../redux/reducers/taskSlice';
import { Task, TaskStatus } from '../../../../../types/Task.type';

interface TaskProps {
  task: Task;
}

export default function Tasks({ task }: TaskProps) {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    dispatch(changeStatus({ id: id, status: !task.status }));
  };

  return (
    <div className="hover:bg-[#A6C5E229] rounded-[4px] box-border justify-between flex items-center">
      <div className="flex items-center px-2 py-1">
        <div className="flex items-center justify-start mr-3">
          <input
            checked={task.status}
            onChange={(e) => handleChange(e, task.id)}
            className="block -mb-[2px] p-2"
            type="checkbox"
          />
        </div>
        <div className="flex items-center">
          <span className="text-[16px] text-[#9FADBC]">{task.name}</span>
        </div>
      </div>
      <div className="flex items-center py-1">
        <button className="w-7 flex items-center justify-center mr-1 h-7 rounded-[4px] hover:bg-[#A6C5E229] transition-all ease-in duration-200 opacity-80  hover:opacity-100">
          <i className="fa-regular text-[14px] text-[#fff] fa-clock"></i>
        </button>
        <button className="w-7 flex items-center justify-center mr-1 h-7 rounded-[4px] hover:bg-[#A6C5E229] transition-all ease-in duration-200 opacity-80  hover:opacity-100">
          <i className="fa-solid text-[14px] text-[#fff] fa-user-plus"></i>
        </button>
      </div>
    </div>
  );
}
