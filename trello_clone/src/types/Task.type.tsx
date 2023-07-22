import { User } from "./User.type";

export interface TaskForm {
  name: string;
  workId: number;
  endAt?: number;
  members?: User[];
}

export interface Task extends TaskForm{
  id: number;
  createAt: number;
}
