import { Roles } from '../enum/Roles';

export interface MemberForm {
  userId: number;
  tableId?: number;
  role: Roles;
  projectId?: number;
  cardId?: number;
}

export interface Member extends MemberForm {
  id: number;
}

export interface MemberUpdateRole {
  id: number;
  role: Roles;
  tableId: number;
}

export interface MemberUpdateCard {
  id: number;
  cardId: number;
  tableId: number;
}
