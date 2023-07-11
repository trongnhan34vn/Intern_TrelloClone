import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import FormTable from '../Main/ProjectManage/ProjectTag/FormTable';

export default function Example() {
  return (
    <div className="fixed top-16 text-right">
      <Menu as="div">
        <li className="mb-[2%] mr-[2%] relative cursor-pointer list-none">
          <Menu.Button>
            <div className="hover:bg-[#A6C5E229] transition-all ease-in-out duration-150 rounded-[3px] font-normal bg-[#A1BDD914] h-[96px] text-center align-middle p-2 bg-cover table-cell w-[200px]">
              <p className="text-[#B6C2CF] font-semibold text-[14px]">
                Tạo bảng mới
              </p>
            </div>
          </Menu.Button>
        </li>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items>
            <Menu.Item>
              {({ close }) => (
                <FormTable closeFn={close}/>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
