
import instance from '..';
import { User, UserDTO, UserResponseLogin } from '../../types/User.type';

export const LOGIN = async (user: UserDTO) : Promise<UserResponseLogin> => {
  let response = await instance.post('/signin', user);
  return response.data;
};

export const REGISTER = async (user: UserDTO) => {
  let response = await instance.post('/register', user);
  return response.data;
};
