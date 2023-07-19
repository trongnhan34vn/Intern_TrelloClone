import instance from '..';
import {
  CardDB,
  CardForm,
  CardPatch,
  CardPatchTest,
} from '../../types/Card.type';

export const FIND_ALL_CARDS = async (): Promise<CardDB[]> => {
  let response = await instance.get('/cards');
  return response.data;
};

export const CREATE_CARD = async (data: CardForm) => {
  await instance.post('/cards', data);
};

export const DELETE_CARD = async (id: number) => {
  await instance.delete('/cards/' + id);
};

export const UPDATE_CARD = async (data: CardPatch) => {
  await instance.patch('/cards/' + data.id, { listId: data.listId });
};

export const UPDATE_CARD_TEST = async (data: CardPatchTest) => {
  await instance.patch('/cards/' + data.id, data);
};

export const FIND_CARD_BY_ID = async (id: number): Promise<CardDB> => {
  let response = await instance.get('/cards/' + id);
  return response.data;
};
