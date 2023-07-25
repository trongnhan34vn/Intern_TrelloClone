import { Listbox, Menu, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

const Test = () => {
  const [selected, setSelected] = useState(null)
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative cursor-default rounded-lg  pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <button className="flex mr-2 rounded-[3px] px-[10px] py-1 bg-[#A1BDD914] h-[37px] text-[#B6C2CF] items-center">
            <span className="text-[14px] leading-[32px] mr-1">Thành viên</span>
            <i className="fa-solid text-[12px] fa-angle-down"></i>
          </button>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
           
              <Listbox.Option
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value={1}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      Nhân
                    </span>
                  </>
                )}
              </Listbox.Option>
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Test;
