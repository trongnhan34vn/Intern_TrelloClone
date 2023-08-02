import React, { useEffect } from 'react';
import { Member } from '../../../../types/Member.type';
import { Project } from '../../../../types/Project.type';
import { getFirstChar } from '../../../../utils/getFirstChar';
import ListTables from './ListTables';
import { ProjectContext } from './ProjectTag';

interface MembersProjectTagProps {
  project: Project;
  membersFilter: Member[];
}

const MembersProjectTag = ({
  project,
  membersFilter,
}: MembersProjectTagProps) => {
  return (
    <div className="task-item pb-5 max-w-[1266px]">
      <div className="flex ml-10 pb-[11px] relative">
        <div className="left-[-40px] absolute top-0">
          <div className="rounded-[3px] h-8 w-8 overflow-hidden mb-4">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center w-full h-full text-[20px] font-bold text-[#1D2125]">
              {getFirstChar(project.name)}
            </div>
          </div>
        </div>
        <h3 className="w-[200px] inline-block overflow-hidden text-base text-[#B6C2CF] whitespace-nowrap font-bold mt-[3px] text-ellipsis	">
          {project.name}
        </h3>
        <div className="flex flex-wrap ml-2 whitespace-nowrap">
          <a
            className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] text-[#B6C2CF] inline-block mb-2 ml-2 py-[6px] pl-[6px] pr-3"
            href=""
          >
            <i className="fa-solid fa-table mr-[8px]"></i>
            <span className="text-[14px] font-semibold">Bảng</span>
          </a>
          <a
            className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] text-[#B6C2CF] inline-block mb-2 ml-2 py-[6px] pl-[6px] pr-3"
            href=""
          >
            <i className="fa-solid fa-chart-pie mr-[8px]"></i>
            <span className="text-[14px] font-semibold">Dạng xem</span>
          </a>
          <a
            className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] text-[#B6C2CF] inline-block mb-2 ml-2 py-[6px] pl-[6px] pr-3"
            href=""
          >
            <i className="fa-regular fa-user mr-[8px]"></i>
            <span className="text-[14px] font-semibold">Thành viên</span>
          </a>
          <a
            className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] text-[#B6C2CF] inline-block mb-2 ml-2 py-[6px] pl-[6px] pr-3"
            href=""
          >
            <i className="fa-solid fa-gear mr-[8px]"></i>
            <span className="text-[14px] font-semibold">Cài đặt</span>
          </a>
        </div>
      </div>
      <div>
        <ProjectContext.Provider value={project}>
          <ListTables />
        </ProjectContext.Provider>
      </div>
    </div>
  );
};

export default MembersProjectTag;
