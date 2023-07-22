import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as taskSlice from '../../../../../redux/reducers/taskSlice';
import * as workSlice from '../../../../../redux/reducers/workSlice';
import { taskSelector } from '../../../../../redux/selectors';
import { Work, WorkDel } from '../../../../../types/Work.type';
import FormCreateTask from './FormCreateTask';
import Task from './Tasks';

interface WorkProps {
  work: Work;
}

export default function Works({ work }: WorkProps) {
  const dispatch = useDispatch();
  const handleDelete = (id: number, cardId: number) => {
    let deleteWork: WorkDel = {
      id: id,
      cardId: cardId,
    };
    dispatch(workSlice.deleteWork(deleteWork));
  };

  useEffect(() => {
    dispatch(taskSlice.findAll());
  }, [work]);

  const tasks = useSelector(taskSelector).listTask;
  const tasksByWorkId = tasks.filter((task) => task.workId === work.id);
  const taskElement = tasksByWorkId.map((task) => {
    return <Task key={task.id} task={task} />;
  });
  return (
    <div className="item mb-6 transition-all ease-in duration-200">
      <div className="flex text-[#9FADBC] justify-between items-center mb-2">
        <div className="flex items-center">
          <i className="fa-regular fa-square-check mr-3 text-[20px]"></i>
          <h2 className="text-[18px] font-semibold">{work.name}</h2>
        </div>
        <div>
          <button
            onClick={() => handleDelete(work.id, work.cardId)}
            className="hover:bg-[#A6C5E229] rounded-[3px] text-[14px] py-[6px] px-3 bg-[#3A444C]"
          >
            Xoá
          </button>
        </div>
      </div>
      <div className="mb-10 w-full relative">
        {/* title */}
        <div className="flex items-center mb-2">
          <div className="">
            <div className="text-[#9FADBC] text-[12px] max-w-[30px]">0%</div>
          </div>
          <div className="w-full ml-[10px]">
            <div className="rounded-[4px] h-2 w-full overflow-hidden relative bg-[#3A444C]">
              <div className="rounded-[4px] h-2 w-full overflow-hidden absolute top-0 left-0 -translate-x-1/2 bg-green-400"></div>
            </div>
          </div>
        </div>
        {/* title */}
        {/* work */}
        {taskElement}
        {/* work */}
        <FormCreateTask workId={work.id} />
      </div>
    </div>
  );
}
