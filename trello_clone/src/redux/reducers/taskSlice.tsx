import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskForm, TaskStatus } from '../../types/Task.type';

interface TaskState {
  listTask: Task[];
}

const initState: TaskState = {
  listTask: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState: initState,
  reducers: {
    createTask: (state, action: PayloadAction<TaskForm>) => {},
    findAll: () => {},
    getAll: (state, action: PayloadAction<Task[]>) => {
      state.listTask = action.payload;
    },
    changeStatus: (state, action: PayloadAction<TaskStatus>) => {},
  },
});

export default taskSlice.reducer;
export const { createTask, findAll, getAll, changeStatus } = taskSlice.actions;
