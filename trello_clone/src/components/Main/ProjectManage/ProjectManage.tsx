import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInitState } from '../../../constant/userState';
import { findProjectsByUserId } from '../../../redux/reducers/projectSlice';
import { findTableByProjectId } from '../../../redux/reducers/tableSlice';
import { projectSelector, tableSelector } from '../../../redux/selectors';
import { Project } from '../../../types/Project.type';
import { User } from '../../../types/User.type';
import ProjectTag from './ProjectTag/ProjectTag';

export default function ProjectManage() {
  const dispatch = useDispatch();
  const userLocalStore = localStorage.getItem('userLogin');
  const [userLogin, setUserLogin] = useState<User>(userInitState);
  // Lấy ra user đang đăng nhập
  useEffect(() => {
    if (userLocalStore) {
      setUserLogin(JSON.parse(userLocalStore));
    }
  }, [userLocalStore]);

  // Request danh sách project theo userId
  useEffect(() => {
    dispatch(findProjectsByUserId(userLogin.id));
  }, []);

  const listProjects: Project[] = useSelector(projectSelector).listProjects;

  const sortListProjects = listProjects.slice().sort((a, b) => {
    return b.id - a.id;
  });

  // listProjects.forEach(element => {
  //   dispatch(findTableByProjectId(element.id))
  // });

  // state = 0
  const tables = useSelector(tableSelector).listTable;

  const [dispatchCount, setDispatchCount] = useState<number>(0);
  useEffect(() => {
    if (listProjects.length > 0) {
      console.log(listProjects);
      
      dispatch(findTableByProjectId(listProjects[dispatchCount]?.id));
    }
  }, [dispatchCount, listProjects]);

  useEffect(() => {
    if (dispatchCount < listProjects.length) {
      setDispatchCount((pre) => pre + 1);
    }
  }, [tables]);

  useEffect(() => {
    console.log(tables);
  }, [tables]);

  const projectTagElement = sortListProjects.map((project) => {
    return <ProjectTag key={project.id} project={project} />;
  });
  return (
    <div className="main mx-4 mt-10 max-w-[825px] min-w-[288px] w-full">
      <div className="sticky-main sticky top-0">
        <h3 className="text-[#B6C2CF] font-bold my-5">
          CÁC KHÔNG GIAN LÀM VIỆC CỦA BẠN
        </h3>
        {/* Project Tag Item */}
        {projectTagElement}
        {/* Project Tag Item */}
      </div>
    </div>
  );
}
