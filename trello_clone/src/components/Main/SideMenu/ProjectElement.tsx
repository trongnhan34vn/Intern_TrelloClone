import { Disclosure } from '@headlessui/react';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoadingContext } from '../../../layouts/MainLayout.tsx/MainLayout';
import { findAllBGs } from '../../../redux/reducers/backgroundSlice';
import { findTableByProjectId } from '../../../redux/reducers/tableSlice';
import { backgroundSelector, tableSelector } from '../../../redux/selectors';
import { Project } from '../../../types/Project.type';
import { getFirstChar } from '../../../utils/getFirstChar';

interface ProjectElementProps {
  project: Project;
}

const ProjectElement = ({ project }: ProjectElementProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openDisclosure, setOpenDisclosure] = useState(false);
  useEffect(() => {
    dispatch(findTableByProjectId(project.id));
    dispatch(findAllBGs());
  }, []);

  const backs = useSelector(backgroundSelector).listBGs;
  const tables = useSelector(tableSelector).tablesByProjectId;

  const getBgUrl = (id: number) => {
    let back = backs.find((bg) => bg.id === id);
    if (!back) return;
    return back.bgUrl;
  };
  const loadingContext = useContext(LoadingContext);
  console.log(loadingContext);
  

  const handleSelectTable = (tableId: number) => {
    if (!loadingContext) return;
    loadingContext.setActive();
    let type = 'user';
    setTimeout(() => {
      navigate(`/main-app/project/${project.id}/table/${tableId}/`, {
        state: type,
      });
      loadingContext.setInActive();
    }, 3000);
  };

  return (
    <Disclosure>
      <Disclosure.Button
        onClick={() => setOpenDisclosure((pre) => !pre)}
        className="w-full"
      >
        <li className="mb-1 py-2 flex items-center rounded-[4px] hover:bg-[#A6C5E229]">
          <div className="flex items-center relative text-[#B6C2CF] rounded-[4px] leading-tight font-bold min-h-[20px] py-[6px] pl-2">
            <div className="left-0 top-0 mr-3">
              <div className="rounded-[3px] h-6 w-6 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center w-full h-full text-[16px] font-bold text-[#1D2125]">
                  {getFirstChar(project.name)}
                </div>
              </div>
            </div>
            <span className="text-[14px] leading-[22px]">{project.name}</span>
          </div>
          <div className="w-[22px] h-[22px] text-[#B6C2CF] mt-1 pr-2 flex items-center justify-center ml-auto rounded-[4px]">
            {openDisclosure ? (
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-right"></i>
            )}
          </div>
        </li>
      </Disclosure.Button>
      <Disclosure.Panel className="pl-2 text-sm text-[#B6C2CF]">
        {tables.map((table) => {
          return (
            <button
              onClick={() => handleSelectTable(table.id)}
              key={table.id}
              className="flex items-center group justify-between w-full py-2 px-2 hover:bg-[#A6C5E229] cursor-pointer rounded-[3px] "
            >
              <div className="flex">
                <img
                  className="w-7 h-5"
                  src={getBgUrl(table.bgId ? table.bgId : 0)}
                  alt=""
                />
                <span className="text-[14px] ml-2 leading-[22px]">
                  {table.name}
                </span>
              </div>
              <i className="fa-solid fa-angle-right transition-all ease-in-out duration-150 -translate-x-2 group-hover:translate-x-[2px]"></i>
            </button>
          );
        })}
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default ProjectElement;
