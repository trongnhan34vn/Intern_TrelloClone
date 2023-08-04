import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import FormEditLabel from './FormEditLabel';

export const EditLabel = () => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="text-[#B6C2CF]">
            <i className="fa-regular fa-pen-to-square"></i>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute bg-white left-1/2 z-50 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <FormEditLabel />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
