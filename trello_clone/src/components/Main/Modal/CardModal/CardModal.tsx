import React, { useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DescriptionModal from './DescriptionModal';
import WorksModal from './WorksModal';
import { Card } from 'react-trello-ts/dist/types/Board';

interface CardModalProps {
  card: Card | null;
  onClose: () => void;
}

const CardModal = ({ card, onClose }: CardModalProps) => {
  const dispatch = useDispatch();

  console.log('card', card);

  // const cardId = useSelector(modalSelector).selectCardId;
  // useEffect(() => {
  //   if (!cardId) return;
  //   setTimeout(() => {
  //     dispatch(findCardById(+cardId));
  //   }, 200);
  // }, [cardId]);

  return (
    <Transition appear show={card ? true : false} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full relative z-10 max-w-[775px] transform overflow-hidden rounded-2xl bg-[#323940] p-6 text-left align-middle shadow-xl transition-all">
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
                <div className="flex gap-4 items-start">
                  <div className="form-left w-full">
                    {/* Description */}
                    <DescriptionModal />
                    {/* Description */}
                    {/* List Works */}
                    <WorksModal />
                    {/* List Works */}
                  </div>
                  <div className="form-right flex flex-col">
                    <div className="mb-4">
                      <h3 className="font-semibold w-full min-w-[170px] mb-2 text-[12px] text-[#9FADBC] ">
                        Thêm vào thẻ
                      </h3>
                      <div className="flex flex-col">
                        {/* Item */}
                        <button className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] h-8 mb-2 max-w-[300px] overflow-hidden py-[6px] px-3 relative text-left text-sm text-[#9FADBC] ">
                          <i className="fa-regular fa-user mr-[6px]"></i>
                          <p className=" inline-block ">Thành viên</p>
                        </button>
                        {/* Item */}
                        {/* Item */}
                        <button className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] h-8 mb-2 max-w-[300px] overflow-hidden py-[6px] px-3 relative text-left text-sm text-[#9FADBC] ">
                          <i className="fa-regular fa-square-check mr-[6px]"></i>
                          <p className=" inline-block ">Việc cần làm</p>
                        </button>
                        {/* Item */}
                        {/* Item */}
                        <button className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] h-8 mb-2 max-w-[300px] overflow-hidden py-[6px] px-3 relative text-left text-sm text-[#9FADBC] ">
                          <i className="fa-regular fa-clock mr-[6px]"></i>
                          <p className=" inline-block ">Ngày</p>
                        </button>
                        {/* Item */}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold w-full min-w-[170px] mb-2 text-[12px] text-[#9FADBC] ">
                        Thêm vào thẻ
                      </h3>
                      <div className="flex flex-col">
                        {/* Item */}
                        <button className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] h-8 mb-2 max-w-[300px] overflow-hidden py-[6px] px-3 relative text-left text-sm text-[#9FADBC] ">
                          <i className="fa-regular fa-user mr-[6px]"></i>
                          <p className=" inline-block ">Thành viên</p>
                        </button>
                        {/* Item */}
                        {/* Item */}
                        <button className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] h-8 mb-2 max-w-[300px] overflow-hidden py-[6px] px-3 relative text-left text-sm text-[#9FADBC] ">
                          <i className="fa-regular fa-user mr-[6px]"></i>
                          <p className=" inline-block ">Thành viên</p>
                        </button>
                        {/* Item */}
                        {/* Item */}
                        <button className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] h-8 mb-2 max-w-[300px] overflow-hidden py-[6px] px-3 relative text-left text-sm text-[#9FADBC] ">
                          <i className="fa-regular fa-user mr-[6px]"></i>
                          <p className=" inline-block ">Thành viên</p>
                        </button>
                        {/* Item */}
                        {/* Item */}
                        <button className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] h-8 mb-2 max-w-[300px] overflow-hidden py-[6px] px-3 relative text-left text-sm text-[#9FADBC] ">
                          <i className="fa-regular fa-user mr-[6px]"></i>
                          <p className=" inline-block ">Thành viên</p>
                        </button>
                        {/* Item */}
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CardModal;
