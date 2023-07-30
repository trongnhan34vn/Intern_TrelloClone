import React, { useContext } from 'react';
import Head from './Head';
import Item from './Item';
import { TableViewContext } from './TableView';

const BodyTable = () => {
  const tableViewContext = useContext(TableViewContext);
  const tables = tableViewContext ? tableViewContext.tables : [];
  const lists = tableViewContext ? tableViewContext.lists : [];

  const tableElement = tables.map((table) => {
    const listsFiltered = lists.filter((list) => list.tableId === table.id);
    return listsFiltered.map((list) => {
      return <Item key={list.id} table={table} list={list} />;
    });
  });

  return (
    <div className="bang">
      <Head />
      <div className="content">{tableElement}</div>
    </div>
  );
};

export default BodyTable;
