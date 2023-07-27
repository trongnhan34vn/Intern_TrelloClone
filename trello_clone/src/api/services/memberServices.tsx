import instance from '..';
import { Member, MemberForm } from '../../types/Member.type';

export const CREATE_MEMBER = async (data: MemberForm) => {
  await instance.post('/members', data);
};

export const FIND_BY_TABLE_ID = async (id: number): Promise<Member[]> => {
  let response = await instance.get('/members?tableId=' + id);
  return response.data;
}
