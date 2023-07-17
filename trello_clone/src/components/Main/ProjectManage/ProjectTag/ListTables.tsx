import { useDispatch } from 'react-redux';
import CreateTableBtn from './CreateTableBtn';
import Table from './Table';

export default function ListTables() {
  return (
    <ul className="flex flex-wrap justify-starts">
      <Table />
      <CreateTableBtn />
    </ul>
  );
}
