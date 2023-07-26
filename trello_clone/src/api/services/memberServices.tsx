import instance from '..';
import { MemberForm } from '../../types/Member.type';

export const CREATE_MEMBER = async (data: MemberForm) => {
  await instance.post('/members', data);
};
