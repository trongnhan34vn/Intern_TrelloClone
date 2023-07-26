import { Roles } from "../enum/Roles"



export interface MemberForm {
  fullName: string
  email: string
  imgUrl: string
  tableId: number
  role: Roles
}

export interface Member extends MemberForm {
  id: number
}