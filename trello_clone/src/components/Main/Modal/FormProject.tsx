import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function FormProject(props: { isOpen: any; closeModal: any }) {
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
              <Dialog.Panel className="w-full relative max-w-[1200px] transform overflow-hidden rounded-[3px] flex min-h-[500px] mt-4 z-10 bg-[#22272B] text-left align-middle shadow-xl transition-all">
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
                </Dialog.Title>
                <div className="items-center flex flex-1 flex-col px-6 overflow-auto text-left z-10 mt-[64px] mb-4 mx-auto">
                  <form className="w-[388px] text-left" action="">
                    <h1 className="text-[#B6C2CF] text-2xl font-semibold leading-8 mb-3">
                      Hãy xây dựng một Không gian làm việc
                    </h1>
                    <p className="text-[18px] text-[#9FADBC] mt-[12px] mb-[24px] mx-auto">
                      Tăng năng suất của bạn bằng cách giúp mọi người dễ dàng
                      truy cập bảng ở một vị trí
                    </p>
                    <div>
                      <label className="mt-6 font-extrabold leading-4 text-[12px] mb-1 block text-[#B6C2CF]">
                        Tên Không gian làm việc
                      </label>
                      <input
                        className="w-[388px] text-[#9FADBC] h-[48px] mb-[6px] border-[2px] border-[#A6C5E229] bg-[#22272B] rounded-[3px] block leading-5 outline py-2 px-3"
                        type="text"
                        placeholder="Công ty của Anh Nam"
                      />
                      <span className="text-[#9FADBC] font-normal text-[12px]">
                        Đây là tên của công ty, nhóm hoặc tổ chức của bạn
                      </span>
                    </div>
                    <div>
                      <label className="mt-6 font-extrabold leading-4 text-[12px] mb-1 block text-[#B6C2CF]">
                        Loại không gian làm việc
                      </label>
                      <select className="w-[388px] text-[#9FADBC] h-[48px] mb-[6px] border-[2px] border-[#A6C5E229] bg-[#22272B] rounded-[3px] block leading-5 outline py-2 px-3">
                        <option value="">Chọn...</option>
                      </select>
                    </div>
                    <div>
                      <label className="mt-6 font-extrabold leading-4 text-[12px] mb-1 block text-[#B6C2CF]">
                        Tên Không gian làm việc{' '}
                        <span className="text-[12px] font-thin">Tuỳ chọn</span>
                      </label>
                      <textarea
                        rows={6}
                        className="text-[14px] w-[388px] text-[#9FADBC] mb-[6px] border-[2px] border-[#A6C5E229] bg-[#22272B] rounded-[3px] resize-none block leading-5 outline py-2 px-3"
                        placeholder="Nhóm của chúng tôi tổ chức mọi thứ ở đây"
                      ></textarea>
                      <span className="text-[#9FADBC] font-normal text-[12px]">
                        Đưa các thành viên của bạn vào bảng với mô tả ngắn về
                        Không gian làm việc của bạn.
                      </span>
                    </div>
                    <div className="mt-4">
                      <button disabled className="h-12 text-[14px] w-full text-[#BFDBF847] bg-[#BCD6F00A] leading-5 inline-flex items-center justify-center rounded-[3px] py-[6px] px-3">
                        Tiếp tục
                      </button>
                    </div>
                  </form>
                </div>
                <div className="bg-[url(https://trello.com/assets/df0d81969c6394b61c0d.svg)] bg-cover flex flex-1 justify-center bg-no-repeat  pt-[112px] items-start">
                  <div className='bg-[url(https://trello.com/assets/d1f066971350650d3346.svg)] w-[342px] h-[256px] aspect-auto'></div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
