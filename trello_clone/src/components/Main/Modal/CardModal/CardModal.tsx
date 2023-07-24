import React, { createContext, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DescriptionModal from './CardModalComp/DescriptionModal';
import ModalFeature from './CardModalComp/ModalFeature';
import HeadModal from './CardModalComp/HeadModal';
import {
  findCardById,
  getCardById,
} from '../../../../redux/reducers/cardSlice';
import { cardSelector, workSelector } from '../../../../redux/selectors';
import Works from './CardModalComp/Works';
import { findWorksByCardId } from '../../../../redux/reducers/workSlice';
import { CardDB } from '../../../../types/Card.type';
import CardInfo from './CardModalComp/CardInfo';

export interface CardModalProps {
  cardId: string | null;
  onClose: () => void;
}

export const CardContext = createContext<CardDB | null>(null);

const CardModal = ({ cardId, onClose }: CardModalProps) => {
  const dispatch = useDispatch();

  const selectCard = useSelector(cardSelector).selectCard;
  const works = useSelector(workSelector).listWorks;

  useEffect(() => {
    if (!cardId) return;
    dispatch(findWorksByCardId(+cardId));
    dispatch(findCardById(+cardId));
  }, [cardId]);

  const worksElement = works.map((work) => {
    return <Works key={work.id} work={work} />;
  });

  return (
    <Transition appear show={cardId ? true : false} as={Fragment}>
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
                <HeadModal selectCard={selectCard} onClose={onClose} />
                <div className="flex gap-4 items-start max-h-[450px] scrollable-div overflow-y-scroll">
                  <div className="form-left w-full">
                    <CardContext.Provider value={selectCard}>
                      <CardInfo selectCard={selectCard} />
                    </CardContext.Provider>
                    {/* Description */}
                    <DescriptionModal card={selectCard} />
                    {/* Description */}
                    {/* List Works */}
                    {worksElement}
                    {/* List Works */}
                  </div>
                  <div className="form-right relative flex flex-col">
                    <CardContext.Provider value={selectCard}>
                      <ModalFeature />
                    </CardContext.Provider>
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
