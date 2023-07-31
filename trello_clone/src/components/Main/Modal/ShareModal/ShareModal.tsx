import { Dialog, Listbox, Transition } from '@headlessui/react';
import React, { Fragment, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as memberSlice from '../../../../redux/reducers/memberSlice';
import { memberSelector } from '../../../../redux/selectors';
import { User } from '../../../../types/User.type';
import { SubnavContext } from '../../DetailProject/DetailProject';
import FormShare from './FormShare';
import Members from './Members';

interface ShareModal {
  shareModal: boolean;
  onClose: () => void;
}

const ShareModal = ({ shareModal, onClose }: ShareModal) => {
  const dispatch = useDispatch();
  const userLocal = localStorage.getItem('userLogin');
  const currentUser: User | null = userLocal ? JSON.parse(userLocal) : null;
  const subNavContext = useContext(SubnavContext);

  const members = subNavContext? subNavContext.members : [];

  const membersElement = members.map((member) => {
    return <Members key={member.id} member={member} currentUser={currentUser} />;
  });

  return (
    <Transition appear show={shareModal} as={Fragment}>
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
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-40">
          <div className="flex min-h-[200px] items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full relative z-10 min-h-[200px] max-w-[610px] transform rounded-2xl bg-[#323940] px-5 py-6 text-left align-middle shadow-xl transition-all">
                <header className="text-[#B6C2CF] mr-6 mb-4 flex justify-between">
                  <h3 className="text-[20px] font-semibold">Chia sẻ bảng</h3>
                  <button
                    onClick={() => onClose()}
                    className="absolute text-[20px] top-5 right-[4%]"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </header>
                <FormShare memberList={members} />
                {/* List Member */}
                {membersElement}
                {/* List Member */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ShareModal;
