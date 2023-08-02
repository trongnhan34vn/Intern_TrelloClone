import { Popover, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import ViewType from './ViewType/ViewType';

const ViewTypeComp = () => {
  const [activeBtn, setActiveBtn] = useState<boolean>(false)
  return (
    <Popover className="relative">
      <Popover.Button
        onClick={() => setActiveBtn(pre => !pre)}
        className={`${activeBtn ? 'bg-[#fff] text-[#000]' : 'text-[#fff] hover:bg-[#A6C5E229]'} h-[34.5px]  rounded-[3px] transition-all ease-in duration-150 py-[6px] px-3 text-[15px]  flex items-center`}
      >
        <i className="mr-2 fa-solid fa-chart-simple"></i>
        <span className="mr-2">Bảng</span>
        <i className="fa-solid fa-caret-down"></i>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        {/* Mark this component as `static` */}
        <Popover.Panel className="z-[999]">
          {({close, open}) =>  <ViewType open={open} close={close} setActiveBtn={setActiveBtn} />}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default ViewTypeComp;
