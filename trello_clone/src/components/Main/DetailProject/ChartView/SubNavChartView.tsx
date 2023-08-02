import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { Table } from '../../../../types/Table.type';
import SelectTable from './SelectTable';

interface SubNavChartViewProps {
  tables: Table[];
  selectTable: Table | null;
  setSelectTable: React.Dispatch<React.SetStateAction<Table | null>>;
}

const SubNavChartView = ({
  tables,
  selectTable,
  setSelectTable,
}: SubNavChartViewProps) => {
  const [activeBtn, setActiveBtn] = useState<boolean>(false);

  return (
    <div className="bg-[#0000003d] w-full z-50">
      <div className="flex-nowrap justify-between h-auto relative inline-flex flex-row gap-1 w-[calc(100%_-_23px)] items-center py-3 pr-[10px] pl-[16px] ">
        <div className="flex items-center">
          <Listbox value={selectTable} onChange={setSelectTable}>
            {({ open }) => (
              <>
                <Listbox.Button
                  onClick={() => setActiveBtn((pre) => !pre)}
                  className={`${
                    activeBtn
                      ? 'bg-[#fff] text-[#000]'
                      : 'text-[#fff] hover:bg-[#A6C5E229]'
                  } h-[34.5px]  rounded-[3px] transition-all ease-in duration-150 py-[6px] px-3 text-[15px]  flex items-center`}
                >
                  <i className="mr-2 fa-solid fa-chart-simple"></i>
                  <span className="mr-2">{selectTable ? selectTable.name : 'Bảng'}</span>
                  <i className="fa-solid fa-caret-down"></i>
                </Listbox.Button>

                <SelectTable
                  setActiveBtn={setActiveBtn}
                  tables={tables}
                  open={open}
                />
              </>
            )}
          </Listbox>
        </div>
      </div>
    </div>
  );
};

export default SubNavChartView;
