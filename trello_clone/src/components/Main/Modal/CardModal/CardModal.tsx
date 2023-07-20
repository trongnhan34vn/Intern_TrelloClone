import React, { useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DescriptionModal from './DescriptionModal';
import WorksModal from './TasksModal';
import { Card } from 'react-trello-ts/dist/types/Board';
import ModalFeature from './ModalFeature';
import HeadModal from './HeadModal';

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

        <div className="fixed inset-16">
          <div className="flex min-h-[500px] items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full pr-[185px] relative z-10 min-h-[500px] max-w-[775px] transform rounded-2xl bg-[#323940] p-6 text-left align-middle shadow-xl transition-all">
                <HeadModal onClose={onClose} />
                <div className="flex gap-4 items-start max-h-[450px] overflow-y-scroll">
                  <div className="form-left w-full">
                    {/* Description */}
                    <DescriptionModal />
                    {/* Description */}
                    {/* List Works */}
                    <WorksModal />
                    {/* List Works */}
                  </div>
                  <div className="form-right relative flex flex-col">
                    <ModalFeature />
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
