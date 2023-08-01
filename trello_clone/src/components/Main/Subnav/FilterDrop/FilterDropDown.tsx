import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  filterCardNoMembers,
  findAllCards,
  searchCardByName,
} from '../../../../redux/reducers/cardSlice';
import WordFilter from './WordFilter';
import MemberFilter from './MemberFilter';
import { SubnavContext } from '../../DetailProject/DetailProject';
import { User } from '../../../../types/User.type';
import { useParams } from 'react-router-dom';
import { Roles } from '../../../../enum/Roles';
import { Member } from '../../../../types/Member.type';
import { CardDB } from '../../../../types/Card.type';

interface FilterDropProps {
  close: () => void;
}

const FilterDropDown = ({ close }: FilterDropProps) => {
  const dispatch = useDispatch();
  const subNavContext = useContext(SubnavContext);
  const userLocal = localStorage.getItem('userLogin');
  const currentUser: User = userLocal ? JSON.parse(userLocal) : null;
  const { tableId } = useParams();

  const members = subNavContext ? subNavContext.members : [];
  const membersFilterCard = members.filter(
    (member) => member.cardId !== undefined && member.cardId !== null
  );

  const membersFilterTable = tableId
    ? members.filter(
        (member) => member.tableId === +tableId && member.role !== Roles.ADMIN
      )
    : [];

  const cards = subNavContext ? subNavContext.cards : [];
  const users = subNavContext ? subNavContext.users : [];

  const [onWordFilter, setOnWordFilter] = useState<boolean>(false);
  const [noMemberFilter, setMemberFilter] = useState<boolean>(false);
  const [currentUserMember, setCurrentUserMember] = useState<boolean>(false);
  const [member, setMember] = useState<Member | null>(null);
  const [membersFilter, setMembersFilter] = useState<Member[]>([]);
  const [allMembersFilter, setAllMembersFilter] = useState<boolean>(false);

  useEffect(() => {
    console.log(membersFilter);
    let arrMembers = membersFilterByMember();
    let cardArr = [];
    if (member) {
      for (let i = 0; i < arrMembers.length; i++) {
        let card = cards.find((card) => card.id === arrMembers[i].cardId);
        if (!card) return;
        cardArr.push(card);
        dispatch(filterCardNoMembers(cardArr));
      }
      console.log(cardArr);
    } else {
      dispatch(findAllCards());
    }
  }, [member, membersFilter]);

  const membersFilterByMember = () => {
    let arr: Member[] = [];
    let filters: Member[] = [];

    for (let i = 0; i < membersFilter.length; i++) {
      filters = membersFilterCard.filter(
        (mem) =>
          mem.userId === membersFilter[i].userId && mem.role !== Roles.ADMIN
      );
    }
    return [...arr, ...filters];
  };

  const checkExist = () => {
    if (!member) return;
    return membersFilter.find((mem) => mem.id === member.id);
  };

  useEffect(() => {
    if (member && !checkExist()) {
      setMembersFilter([...membersFilter, member]);
    }
  }, [member]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== '') {
      setOnWordFilter(true);
    } else {
      setOnWordFilter(false);
    }
    setTimeout(() => {
      dispatch(searchCardByName(e.target.value));
    }, 1000);
  };

  useEffect(() => {
    if (noMemberFilter) {
      let cardArr = [...cards];
      for (let i = 0; i < membersFilterCard.length; i++) {
        let card = cards.find(
          (card) => card.id === membersFilterCard[i].cardId
        );

        if (!card) return;
        removeFromArr(cardArr, card);
      }
      dispatch(filterCardNoMembers(cardArr));
    } else {
      dispatch(findAllCards());
    }
  }, [noMemberFilter]);

  const removeFromArr = (arr: CardDB[], card: CardDB) => {
    let index = arr.indexOf(card);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  };

  useEffect(() => {
    if (!currentUser) return;
    if (currentUserMember) {
      let cardArr = [];
      for (let i = 0; i < membersFilterCard.length; i++) {
        let card = cards.find(
          (card) =>
            card.id === membersFilterCard[i].cardId &&
            membersFilterCard[i].userId === currentUser.id
        );
        if (!card) return;
        cardArr.push(card);
        dispatch(filterCardNoMembers(cardArr));
      }
    } else {
      dispatch(findAllCards());
    }
  }, [currentUserMember]);

  return (
    <div className="w-[384px] -left-48 absolute top-[20px] rounded-[8px] z-[999] bg-[#282E33]">
      <header className="py-1 px-2 text-[#B6C2CF] font-normal relative leading-5">
        <div className="text-[#9FADBC] font-bold text-[14px] leading-10 h-10 px-8 flex justify-center">
          <span>Lọc</span>
        </div>
        <button
          onClick={() => close}
          className="absolute p-[6px] top-2 right-2 w-8 h-8 rounded-[3px] text-[#8C9BAB] hover:bg-[#A6C5E229] transition-all ease-in duration-200"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </header>
      <div className="px-3 pb-3">
        <WordFilter handleChange={handleChange} />
        {!onWordFilter ? (
          <MemberFilter
            noMemberFilter={noMemberFilter}
            setMember={setMember}
            member={member}
            users={users}
            membersFilterTable={membersFilterTable}
            setCurrentUserMember={setCurrentUserMember}
            setMemberFilter={setMemberFilter}
            // allMembersFilter={allMembersFilter}
            // setAllMembersFilter={setAllMembersFilter}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FilterDropDown;
