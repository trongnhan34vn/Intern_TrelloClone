import instance from '..';
import { Table, TableDTO } from '../../types/Table.type';

export const CREATE_TABLE = async (table: TableDTO): Promise<Table> => {
  let response = await instance.post('/tables', table);
  return response.data;
};

export const FIND_TABLES_BY_PROJECT_ID = async (
  projectId: number
): Promise<Table[]> => {
  let response = await instance.get('/tables?projectId=' + projectId);
  return response.data;
};
