import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoadingContext } from '../../../../layouts/MainLayout.tsx/MainLayout';
import { backgroundSelector } from '../../../../redux/selectors';
import { Table } from '../../../../types/Table.type';
import { Project } from '../../../../types/Project.type';

interface TableProps {
  table: Table
  project: Project
}

export default function TableComp({table, project}: TableProps) {
  const navigate = useNavigate()
  const loadingContext = useContext(LoadingContext);
  const backgrounds = useSelector(backgroundSelector).listBGs;
  const getBGUrl = () => {
    let bgId = table.bgId;
    let bg = backgrounds.find(bg => bg.id === bgId);
    if(!bg) return;
    return bg.bgUrl;
  }

  const handleClick = () => {
    if(!loadingContext) return
    loadingContext.setActive();
    setTimeout(() => {
      navigate(`/main-app/detail-project/${table.id}/${project.id}`);
      loadingContext.setInActive();
    },3000)
  }

  return (
    <li onClick={handleClick} className="mb-[2%] mr-[2%] relative cursor-pointer list-none">
      <div style={{backgroundImage: `url("${getBGUrl()}")`}} className="hover:bg-[#A6C5E229] bg-cover bg-center opacity-80 hover:opacity-100 transition-all ease-in-out duration-150 rounded-[3px] font-normal bg-[#A1BDD914] h-[96px] text-center align-middle p-2 bg-no-repeat table-cell w-[200px]">
        <p className="text-[#B6C2CF] font-semibold text-[14px]">{table.name}</p>
      </div>
    </li>
  );
}
