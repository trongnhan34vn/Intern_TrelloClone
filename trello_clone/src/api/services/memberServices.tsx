import instance from '..';
import { Member, MemberForm, MemberUpdateCard, MemberUpdateRole } from '../../types/Member.type';

export const CREATE_MEMBER = async (data: MemberForm) => {
  await instance.post('/members', data);
};

export const FIND_BY_TABLE_ID = async (id: number): Promise<Member[]> => {
  let response = await instance.get('/members?tableId=' + id);
  return response.data;
}

export const UPDATE_ROLE = async (data: MemberUpdateRole): Promise<void> => {
  await instance.patch('/members/'+ data.id, {role: data.role});
}

export const UPDATE_CARD = async (data: MemberUpdateCard): Promise<void> => {
  await instance.patch('/members/'+ data.id, {cardId: data.cardId});
}
