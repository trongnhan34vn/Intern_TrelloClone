import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Table, TableDTO } from '../../types/Table.type';

interface TableState {
  latestTable: Table | null;
  listTable: Table[];
}

const initialState: TableState = {
  latestTable: null,
  listTable: [],
};

const tableSlice = createSlice({
  name: 'table',
  initialState: initialState,
  reducers: {
    createTable: (state, action: PayloadAction<TableDTO>) => {},
    getLatestTable: (state, action: PayloadAction<Table>) => {
      state.latestTable = action.payload;
    },
    resetTableJustAdded: (state) => {
      state.latestTable = null;
    },
    findTableByProjectId: (state, action: PayloadAction<number>) => {},
    getTablesByProjectId: (state, action: PayloadAction<Table[]>) => {
      state.listTable = [...state.listTable, ...action.payload];
    },
  },
});

export default tableSlice.reducer;
export const {
  createTable,
  getLatestTable,
  resetTableJustAdded,
  findTableByProjectId,
  getTablesByProjectId,
} = tableSlice.actions;
