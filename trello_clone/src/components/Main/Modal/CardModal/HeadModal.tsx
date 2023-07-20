import { Dialog } from '@headlessui/react';
import React from 'react';

interface HeadModalProps {
  onClose: () => void
}

const HeadModal = ({onClose}: HeadModalProps) => {
  return (
    <Dialog.Title
      as="h3"
      className="text-lg font-medium leading-6 text-gray-900"
    >
      <div className="absolute top-2 right-[1em]">
        <button
          className="hover:bg-[#A1BDD914] outline-none px-2 py-1 rounded-2xl"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark text-[#9FADBC] "></i>
        </button>
      </div>
      <div className="flex items-center mb-2">
        <i className="fa-solid fa-print text-[#9FADBC] "></i>
        <textarea
          className="mt-[-10px] overflow-hidden h-7 bg-[#0000] align-middle text-[20px] border-none rounded-[3px] text-[#000] font-bold my-[-4px] max-h-[256px] min-h-[20px] py-1 pr-2 pl-3 resize-none w-[224px]"
          value={''}
          onChange={() => {}}
        ></textarea>
      </div>
      <div className="ml-7 mb-10">
        <p className="text-[#9FADBC] text-sm">
          trong danh sách{' '}
          <a className="underline" href="">
            {''}
          </a>{' '}
        </p>
      </div>
    </Dialog.Title>
  );
};

export default HeadModal;
