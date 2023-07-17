import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project, ProjectDTO } from '../../types/Project.type';
import { Table } from '../../types/Table.type';


const listProjects : Project [] = [];

export interface TableAction {
  index: number
  tables: Table[];
}

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    listProjects: listProjects,
  },
  reducers: {
    createProject: (state, action: PayloadAction<ProjectDTO>) => {},
    findProjectsByUserId: (state, action: PayloadAction<number>) => {
      
    },
    getProjectsByUserId: (state, action: PayloadAction<Project[]>) => {
      state.listProjects = action.payload;
    }
  },
});

export default projectSlice.reducer;
export const { createProject, findProjectsByUserId, getProjectsByUserId } = projectSlice.actions;
