import { RootState } from "./store";

export const userSelector = (state: RootState) => state.user;
export const typeProjectSelector = (state: RootState) => state.type;
export const projectSelector = (state: RootState) => state.project;
export const backgroundSelector = (state: RootState) => state.background;
export const tableSelector = (state: RootState) => state.table;
export const listSelector = (state: RootState) => state.list;
export const cardSelector = (state: RootState) => state.card;