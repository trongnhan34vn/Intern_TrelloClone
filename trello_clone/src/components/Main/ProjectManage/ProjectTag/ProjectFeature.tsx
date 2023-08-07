import React from 'react';

export interface FeatureProject {
  name: string;
  icon: string;
}

const feature: FeatureProject[] = [
  {
    name: 'Bảng',
    icon: 'fa-solid fa-table mr-[8px]'
  },
  {
    name: 'Dạng xem',
    icon: 'fa-solid fa-chart-pie mr-[8px]'
  },
  {
    name: 'Thành viên',
    icon: 'fa-regular fa-user mr-[8px]'
  },
  {
    name: 'Cài đặt',
    icon: 'fa-solid fa-gear mr-[8px]'
  },

];

const ProjectFeature = () => {
  return (
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
  );
};

export default ProjectFeature;
