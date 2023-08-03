import instance from "..";
import { CardLabel, CardLabelForm } from "../../types/CardLabel.type";

export const CREATE = async (data: CardLabelForm) => {
  await instance.post('/card-label', data)
}

export const FIND_ALL = async (): Promise<CardLabel[]> => {
  let response = await instance.get('/card-label')
  return response.data
}