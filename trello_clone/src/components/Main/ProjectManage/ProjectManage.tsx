import React from 'react';
import ProjectTag from './ProjectTag/ProjectTag';

export default function ProjectManage() {
  return (
    <div className="main mx-4 my-10 max-w-[825px] min-w-[288px] w-full">
      <div className="sticky-main sticky top-0">
        <h3 className="text-[#B6C2CF] font-bold my-5">
          CÁC KHÔNG GIAN LÀM VIỆC CỦA BẠN
        </h3>
        {/* Project Tag Item */}
        <ProjectTag />
        {/* Project Tag Item */}
      </div>
    </div>
  );
}
