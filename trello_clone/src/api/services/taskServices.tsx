import instance from "..";
import { Task, TaskForm } from "../../types/Task.type";

export const CREATE_TASK = async (data: TaskForm): Promise<void> => {
  await instance.post('/tasks/', data);
}

export const FIND_ALL = async (): Promise<Task[]> => {
  let response = await instance.get('/tasks');
  return response.data;
}