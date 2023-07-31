import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tableSelector } from '../../../../redux/selectors';
import { Member } from '../../../../types/Member.type';
import CreateTableBtn from './CreateTableBtn';
import { ProjectContext } from './ProjectTag';
import Table from './Table';


export default function ListTables() {
  const tables = useSelector(tableSelector).listTable;
  const project = useContext(ProjectContext);
  const tableFilters = tables.filter(table => table.projectId === project.id);
  const tableElement = tableFilters.map(table => {
    return (
      <Table project={project} key={table.id} table={table} />
    )
  })

  return (
    <ul className="flex flex-wrap justify-starts w-[900px]">
      {tableElement}
      <CreateTableBtn />
    </ul>
  );
}
