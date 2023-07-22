

export interface CardForm {
  name: string ;
  listId: number ;
  order: number;
}

export interface CardDB extends CardForm {
  id: number;
  createdAt: number;
  description: string;
  endAt: number
}

export interface CardPatch {
  id: number | undefined ;
  listId: number ;
  order: number
}

export interface CardPatchTest extends CardForm {
  id: number
  order: number
}

export interface CardUpdateDescription {
  id: number
  description: string
}