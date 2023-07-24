import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { CardDB } from '../../../../../types/Card.type';
import { FeatureContext } from '../CreateFeatureBtn';
import FormFeatureLayout from '../FormFeatureLayout';

interface CardInfoProps {
  selectCard: CardDB | null;
}

const CardInfo = ({ selectCard }: CardInfoProps) => {
  const feature = {
    code: 'N',
    name: 'Ngày',
    icon: 'fa-regular fa-clock',
  };

  const formatCreateDate = (timeStamp: number) => {
    let date = new Date(timeStamp);
    return date.getDate() + ' tháng ' + (+date.getMonth() + 1);
  };

  const formatEndDate = (timeStamp: number) => {
    let date = new Date(timeStamp);
    return (
      date.getDate() +
      ' tháng ' +
      (+date.getMonth() + 1) +
      ' lúc ' +
      date.getHours() +
      ':' +
      date.getMinutes()
    );
  };
  return (
    <div className="ml-7 mb-8">
      <h3 className="text-[#9FADBC] text-left text-[12px] font-bold mb-2">
        Ngày
      </h3>
      <Popover className="relative">
        <Popover.Button className="mb-2 w-1/2 outline-none">
          <h3 className="bg-[#A1BDD914] text-left hover:bg-[#A6C5E229] rounded-[3px] text-[#B6C2CF] py-[6px] px-3 text-[14px] font-normal ">
            <span>
              {selectCard ? formatCreateDate(selectCard.createdAt) : ''}
            </span>
            <span> - </span>
            <span>{selectCard ? formatEndDate(selectCard.endAt) : ''}</span>
          </h3>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Popover.Panel className="absolute top-full left-0 z-50">
            {({ close }) => {
              return (
                <FeatureContext.Provider
                  value={{ feature: feature, closeFn: close }}
                >
                  <FormFeatureLayout closeFn={close} />;
                </FeatureContext.Provider>
              );
            }}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default CardInfo;
