import { Table } from "./Table.type"



export interface ProjectDTO {
  name: string,
  typeProjectId: number,
  userId: number,
  description: string
}


export interface Project extends ProjectDTO {
  id: number
}

export interface ProjectDelete {
  id: number
  userId: number
}
