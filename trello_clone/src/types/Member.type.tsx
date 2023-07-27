import { Roles } from '../enum/Roles';

export interface MemberForm {
  userId: number;
  tableId: number;
  role: Roles;
  projectId?: number;
}

export interface Member extends MemberForm {
  id: number;
}

export interface MemberUpdateRole {
  id: number;
  role: Roles;
}