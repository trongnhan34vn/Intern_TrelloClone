import React, { createContext, useContext, useEffect } from 'react';
import HeadTable from './HeadTable';
import BodyTable from './BodyTable';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as tableSlice from '../../../../redux/reducers/tableSlice';
import { tableSelector } from '../../../../redux/selectors';
import { Table } from '../../../../types/Table.type';

export interface TableViewProps {
  tables: Table[];
}

export const TableViewContext = createContext<TableViewProps | null>(null);

export const TableView = () => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  useEffect(() => {
    if (!projectId) return;
    dispatch(tableSlice.findTableByProjectId(+projectId));
  }, [projectId]);

  const tables = useSelector(tableSelector).listTable;

  return (
    <div className="flex bg-no-repeat bg-cover bg-center flex-col flex-1 pl-[260px] h-[calc(100vh_-_64px)] overflow-y-auto">
      <TableViewContext.Provider value={{ tables: tables }}>
        <HeadTable />
        <BodyTable />
      </TableViewContext.Provider>
    </div>
  );
};
