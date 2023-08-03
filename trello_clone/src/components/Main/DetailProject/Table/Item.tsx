import React, { useContext } from 'react';
import { List } from '../../../../types/List.type';
import { SubnavContext } from '../DetailProject';
import { CardDB } from '../../../../types/Card.type';
import { Member } from '../../../../types/Member.type';

interface ItemProps {
  list: List;
}

const Item = ({ list }: ItemProps) => {
  const snContext = useContext(SubnavContext);
  const cards = snContext ? snContext.cards : [];
  const memberCards = snContext ? snContext.memberCards : [];
  const bgs = snContext ? snContext.backgrounds : [];
  const selectTable = snContext ? snContext.selectTable : null;
  const members = snContext ? snContext.members : [];
  const users = snContext ? snContext.users : [];
  const cardLabels = snContext ? snContext.cardLabels : [];
  const labels = snContext ? snContext.labels : [];

  const filterLabelsByCard = (cardId: number) => {
    let cl = cardLabels.filter((cl) => cl.cardId === cardId);
    let temps = [];
    for (let i = 0; i < cl.length; i++) {
      let temp = labels.find((label) => label.id === cl[i].labelId);
      if (!temp) return [];
      temps.push(temp);
    }
    return temps;
  };

  const getBackgroundURL = () => {
    if (!selectTable) return;
    let bgId = selectTable.bgId;
    let bg = bgs.find((bg) => bg.id === bgId);
    if (!bg) return;
    return bg.bgUrl;
  };

  const getUserImg = (member: Member) => {
    let selectUser = users.find((user) => user.id === member.userId);
    if (!selectUser) return;
    return selectUser.imageUrl;
  };

  const filterMemberByCardId = (card: CardDB) => {
    const memberCardsFilter = memberCards.filter(
      (member) => member.cardId === card.id
    );
    let memberFilters = [];
    for (let i = 0; i < memberCardsFilter.length; i++) {
      let member = members.find((m) => m.id === memberCardsFilter[i].memberId);
      if (!member) return [];
      memberFilters.push(member);
    }
    return memberFilters;
  };

  const cardsFiltered = cards.filter((card) => card.listId === list.id);

  const showDate = (time: number) => {
    let date = new Date(time);
    return date.getDate() + ' tháng ' + (+date.getMonth() + 1);
  };

  const cardElement = cardsFiltered.map((card) => {
    let membersFiltered = filterMemberByCardId(card);

    const labelElement = filterLabelsByCard(card.id).map((label) => {
      return (
        <div
          style={{ backgroundColor: `${label.code}` }}
          className="rounded-[4px] min-w-[56px] h-4"
        ></div>
      );
    });

    const memberElement = membersFiltered.map((member) => {
      return (
        <span key={member.id}>
          <img
            className="rounded-[50%] w-[28px] h-[28px]"
            src={getUserImg(member)}
            alt=""
          />
        </span>
      );
    });
    return (
      <div
        key={card.id}
        className="title h-[41px] mr-[15px] ml-[15px] flex border-b-[0.5px] border-b-[#333B43]"
      >
        <div className="w-[calc(32%_-_20px)] text-[14px] text-[#9FADBC] p-2 font-medium inline-flex items-center">
          <div className="flex">
            <img
              className="w-8 mr-2 rounded-[3px] h-5"
              src={getBackgroundURL()}
              alt="mất ảnh"
            />
            <span>{card.name}</span>
          </div>
        </div>
        <div className="w-[17%] text-[#9FADBC] p-2 font-medium inline-flex items-center text-[14px]">
          <span>{card.listId === list.id ? list.name : ''}</span>
        </div>
        <div className="w-[17%] text-[#9FADBC] py-2 font-medium inline-flex items-center text-[14px]">
          <div className="py-2 flex items-center w-4/5 overflow-hidden gap-1">{labelElement}</div>
        </div>
        <div className="w-[17%] text-[#9FADBC] p-2 font-medium inline-flex items-center text-[14px]">
          {memberElement}
        </div>
        <div className="w-[17%] text-[#9FADBC] p-2 font-medium inline-flex items-center text-[14px]">
          {card.endAt ? (
            <span className="inline-block bg-[#143C2B] rounded-[3px] px-1 text-[#7EE2B8]">
              <i className="fa-regular mr-1 fa-clock"></i>
              <span>{showDate(card.endAt)}</span>
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  });

  return <>{cardElement}</>;
};

export default Item;
