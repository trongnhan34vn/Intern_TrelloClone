import { List } from "../../types/List.type";
import instance from "..";

export const FIND_LISTS_BY_TABLE_ID = async (tableId: number): Promise<List[]> => {
  let response = await instance.get('/lists?tableId=' + tableId)
  return response.data;
}