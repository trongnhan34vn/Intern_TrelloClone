import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInitState } from '../../../constant/userState';
import { Roles } from '../../../enum/Roles';
import * as memberSlice from '../../../redux/reducers/memberSlice';
import * as projectSlice from '../../../redux/reducers/projectSlice';
import * as tableSlice from '../../../redux/reducers/tableSlice';
import {
  memberSelector,
  projectSelector,
  tableSelector,
} from '../../../redux/selectors';
import { Member } from '../../../types/Member.type';
import { Project } from '../../../types/Project.type';
import { Table } from '../../../types/Table.type';
import { User } from '../../../types/User.type';
import MembersProjectTag from './ProjectTag/MembersProjectTag';
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
    dispatch(projectSlice.findProjectsByUserId(userLogin.id));
  }, [userLogin]);

  useEffect(() => {
    dispatch(tableSlice.findAll());
    dispatch(memberSlice.findByUserId(userLogin.id));
    dispatch(projectSlice.findAll());
  },[])

  
  // mảng member user hiện tại (user hiệnt tại là thành viên của bảng nào)
  const members = useSelector(memberSelector).membersByUserId;
  // 1 mảng member với user hiện tại là thành viên
  const membersFilter = members.filter((member) => member.role !== Roles.ADMIN);
  const tables = useSelector(tableSelector).listTable;
  const projects = useSelector(projectSelector).projects;
  const [projectArr, setProjectArr] = useState<Project[]>([]);

  useEffect(() => {
    let tableArr: Table[] = [];
    for (let i = 0; i < membersFilter.length; i++) {
      let table = tables.find((table) => table.id === membersFilter[i].tableId);
      if (!table) return;
      tableArr.push(table);
    }
    console.log(tableArr);
    
    let projectArr: Project[] = [];
    for (let i = 0; i < tableArr.length; i++) {
      let project = projects.find(
        (project) => project.id === tableArr[i].projectId
      );
      if (!project) return;
      projectArr.push(project);
    }
    setProjectArr(projectArr);
  }, [members]);

  console.log(projectArr);

  const listProjects: Project[] = useSelector(projectSelector).listProjects;

  const sortListProjects = listProjects.slice().sort((a, b) => {
    return b.id - a.id;
  });

  const projectTagElement = sortListProjects.map((project) => {
    return <ProjectTag key={project.id} project={project} />;
  });
  return (
    <div className="main mx-4 mt-10 max-w-[825px] min-w-[288px] w-full">
      <div className="sticky-main sticky top-0">
        <div>
          <h3 className="text-[#B6C2CF] font-bold my-5">
            CÁC KHÔNG GIAN LÀM VIỆC CỦA BẠN
          </h3>
          {/* Project Tag Item */}
          {projectTagElement}
          {/* Project Tag Item */}
        </div>
      </div>
    </div>
  );
}
