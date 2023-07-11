import { AxiosResponse } from 'axios';
import instance from '..';
import { User } from '../../types/User';

export const LOGIN = async (user: User) => {
  let response = await instance.post('/signin', user);
  return response.data;
};

export const REGISTER = async (user: any) : Promise<AxiosResponse<any>> => {
  let response = await instance.post('/register', user);
  return response.data;
};
