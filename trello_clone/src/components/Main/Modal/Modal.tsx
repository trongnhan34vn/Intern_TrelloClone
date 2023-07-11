import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function Modal(props: { isOpen: any; closeModal: any }) {
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
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
              <Dialog.Panel className="w-full relative max-w-[775px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  <div className="absolute top-2 right-[1em]">
                    <button
                      className="hover:bg-[#A1BDD914] px-2 py-1 rounded-2xl"
                      onClick={props.closeModal}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div className="flex items-center mb-2">
                    <i className="fa-solid fa-print"></i>
                    <textarea
                      className="mt-[-10px] overflow-hidden h-7 bg-[#0000] align-middle text-[20px] border-none rounded-[3px] text-[#000] font-bold my-[-4px] max-h-[256px] min-h-[20px] py-1 pr-2 pl-3 resize-none w-[224px]"
                      value={'Anh Nam Gucci'}
                      onChange={() => {}}
                    ></textarea>
                  </div>
                  <div className="ml-7 mb-10">
                    <p className="text-[#9FADBC] text-sm">
                      trong danh sách{' '}
                      <a className="underline" href="">
                        Nam Gucci
                      </a>{' '}
                    </p>
                  </div>
                </Dialog.Title>
                <div className="flex gap-4 items-start">
                  <div className="form-left w-full">
                    <div className="item">
                      <div className="flex items-center mb-2">
                        <i className="fa-solid mr-4 fa-align-left"></i>
                        <h2 className="text-[20px] font-bold">Mô tả</h2>
                      </div>
                      <div className="ml-7 mb-10">
                        <div className="bg-[#A1BDD914] hover:bg-[#A6C5E229] cursor-pointer text-sm py-2 px-3 h-[54px] rounded-[3px] text-[#9FADBC]">
                          Thêm mô tả chi tiết...
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-right flex flex-col">
                    <div className="mb-4">
                      <h3 className="font-semibold w-full min-w-[170px] mb-2 text-[12px] text-[#172B4D]">
                        Thêm vào thẻ
                      </h3>
                      <div className="flex flex-col">
                        {/* Item */}
                        <button className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] h-8 mb-2 max-w-[300px] overflow-hidden py-[6px] px-3 relative text-left text-sm text-[#172B4D]">
                          <i className="fa-regular fa-user mr-[6px]"></i>
                          <p className=" inline-block ">Thành viên</p>
                        </button>
                        {/* Item */}
                        {/* Item */}
                        <button className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] h-8 mb-2 max-w-[300px] overflow-hidden py-[6px] px-3 relative text-left text-sm text-[#172B4D]">
                          <i className="fa-regular fa-square-check mr-[6px]"></i>
                          <p className=" inline-block ">Việc cần làm</p>
                        </button>
                        {/* Item */}
                        {/* Item */}
                        <button className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] h-8 mb-2 max-w-[300px] overflow-hidden py-[6px] px-3 relative text-left text-sm text-[#172B4D]">
                          <i className="fa-regular fa-clock mr-[6px]"></i>
                          <p className=" inline-block ">Ngày</p>
                        </button>
                        {/* Item */}
                        {/* Item */}
                        <button className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] h-8 mb-2 max-w-[300px] overflow-hidden py-[6px] px-3 relative text-left text-sm text-[#172B4D]">
                          <i className="fa-regular fa-user mr-[6px]"></i>
                          <p className=" inline-block ">Thành viên</p>
                        </button>
                        {/* Item */}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold w-full min-w-[170px] mb-2 text-[12px] text-[#172B4D]">
                        Thêm vào thẻ
                      </h3>
                      <div className="flex flex-col">
                        {/* Item */}
                        <button className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] h-8 mb-2 max-w-[300px] overflow-hidden py-[6px] px-3 relative text-left text-sm text-[#172B4D]">
                          <i className="fa-regular fa-user mr-[6px]"></i>
                          <p className=" inline-block ">Thành viên</p>
                        </button>
                        {/* Item */}
                        {/* Item */}
                        <button className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] h-8 mb-2 max-w-[300px] overflow-hidden py-[6px] px-3 relative text-left text-sm text-[#172B4D]">
                          <i className="fa-regular fa-user mr-[6px]"></i>
                          <p className=" inline-block ">Thành viên</p>
                        </button>
                        {/* Item */}
                        {/* Item */}
                        <button className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] h-8 mb-2 max-w-[300px] overflow-hidden py-[6px] px-3 relative text-left text-sm text-[#172B4D]">
                          <i className="fa-regular fa-user mr-[6px]"></i>
                          <p className=" inline-block ">Thành viên</p>
                        </button>
                        {/* Item */}
                        {/* Item */}
                        <button className="hover:bg-[#A6C5E229] bg-[#A1BDD914] rounded-[3px] h-8 mb-2 max-w-[300px] overflow-hidden py-[6px] px-3 relative text-left text-sm text-[#172B4D]">
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
}
