import instance from '..';
import { Label } from '../../types/Label.type';

export const FIND_ALL = async (): Promise<Label[]> => {
  let response = await instance.get('/labels');
  return response.data;
};

export const SEARCH_BY_NAME = async (data: string): Promise<Label[]> => {
  let response = await instance.get('/labels?name_like=' + data);
  return response.data;
};
