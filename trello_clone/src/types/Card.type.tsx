

export interface CardForm {
  name: string ;
  listId: number ;
}

export interface CardDB extends CardForm {
  id: number;
  createdAt: number;
}

export interface CardPatch {
  id: number | undefined ;
  listId: number;
}