import React, { createContext, useContext, useEffect, useState } from 'react';
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
import { SubnavContext } from '../../DetailProject/DetailProject';
import { Member } from '../../../../types/Member.type';
import CardMembers from './CardModalComp/CardMembers';

export interface CardModalProps {
  cardId: string | null;
  onClose: () => void;
}

export const CardContext = createContext<CardDB | null>(null);

const CardModal = ({ cardId, onClose }: CardModalProps) => {
  const dispatch = useDispatch();

  const selectCard = useSelector(cardSelector).selectCard;

  const works = useSelector(workSelector).listWorks;

  const subnavContext = useContext(SubnavContext);
  const members: Member[] = subnavContext ? subnavContext.members : [];
  const membersFilter = cardId
    ? members.filter(
        (member) =>
          member.cardId !== undefined &&
          member.cardId !== null &&
          member.cardId === +cardId
      )
    : [];

  useEffect(() => {
    if (!cardId) return;
    dispatch(findWorksByCardId(+cardId));
    dispatch(findCardById(+cardId));
  }, [cardId]);

  const worksElement = works.map((work) => {
    return <Works key={work.id} work={work} />;
  });

  const checkCardHasEndDate = () => {
    if (!selectCard) return;
    if (selectCard.endAt !== 0) return true;
    return false;
  };

  const checkListMembers = () => {
    if(membersFilter.length === 0) return false
    return true;
  }

  return (
    <Transition appear show={cardId ? true : false} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
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
                <HeadModal
                  cardId={cardId}
                  selectCard={selectCard}
                  onClose={onClose}
                />

                <CardContext.Provider value={selectCard}>
                  <div className="flex gap-4 items-start h-[420px] scrollable-div overflow-y-scroll">
                    <div className="form-left w-full h-full">
                      <div className="flex ml-7 mb-8">
                        {checkListMembers() ? (
                          <CardMembers members={membersFilter} />
                        ) : (
                          <></>
                        )}

                        {checkCardHasEndDate() ? (
                          <CardInfo checkListMembers={checkListMembers} selectCard={selectCard} />
                        ) : (
                          <></>
                        )}
                      </div>

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
                </CardContext.Provider>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CardModal;
