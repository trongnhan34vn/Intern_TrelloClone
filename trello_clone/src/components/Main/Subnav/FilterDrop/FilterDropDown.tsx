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
import { CardContext } from '../../Modal/CardModal/CardModal';

interface FilterDropProps {
  close: () => void;
  open: boolean;
  setActiveBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterDropDown = ({ close, open, setActiveBtn }: FilterDropProps) => {
  useEffect(() => {
    setActiveBtn(open);
  }, [open]);

  const dispatch = useDispatch();
  const subNavContext = useContext(SubnavContext);
  const userLocal = localStorage.getItem('userLogin');
  const currentUser: User = userLocal ? JSON.parse(userLocal) : null;
  const { tableId } = useParams();

  const cards = subNavContext ? subNavContext.cards : [];
  const users = subNavContext ? subNavContext.users : [];

  const members = subNavContext ? subNavContext.members : [];
  const memberCards = subNavContext ? subNavContext.memberCards : [];

  const membersFilterTable = tableId
    ? members.filter(
        (member) => member.tableId === +tableId && member.role !== Roles.ADMIN
      )
    : [];

  const getCardHasMember = () => {
    let arr: CardDB[] = [];
    for (let i = 0; i < memberCards.length; i++) {
      let member = cards.find((card) => card.id === memberCards[i].cardId);
      if (!member) return [];
      arr.push(member);
    }
    return arr;
  };

  const removeFromArr = (arr: CardDB[], card: CardDB) => {
    let index = arr.indexOf(card);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  };

  const getCardNonMember = () => {
    let cardArr = [...cards];
    let cardMember = getCardHasMember();
    for (let i = 0; i < cardMember.length; i++) {
      let card = cards.find((c) => c.id === cardMember[i].id);
      if (!card) return [];
      removeFromArr(cardArr, card);
    }
    return cardArr;
  };

  const membersFilterCurrentUser = members.filter(
    (member) => member.userId === currentUser.id
  );

  const getMembersCardFilterCurrentUser = () => {
    let memberCard = [];
    for (let i = 0; i < memberCards.length; i++) {
      for (let j = 0; j < membersFilterCurrentUser.length; j++) {
        if (membersFilterCurrentUser[j].id === memberCards[i].memberId) {
          memberCard.push(memberCards[i]);
        }
      }
    }
    return memberCard;
  };

  const getCardsCurrentUser = () => {
    let memberCards = getMembersCardFilterCurrentUser();
    let cardArr = [];
    for (let i = 0; i < memberCards.length; i++) {
      let card = cards.find((c) => c.id === memberCards[i].cardId);
      if (!card) return [];
      cardArr.push(card);
    }
    return cardArr;
  };

  const [onWordFilter, setOnWordFilter] = useState<boolean>(false);
  const [noMemberFilter, setMemberFilter] = useState<boolean>(false);
  const [currentUserMember, setCurrentUserMember] = useState<boolean>(false);
  const [member, setMember] = useState<Member | null>(null);
  const [membersFilter, setMembersFilter] = useState<Member[]>([]);
  const [allMembersFilter, setAllMembersFilter] = useState<boolean>(false);

  const filterMembersByUserId = () => {
    let mcs = [];
    for (let i = 0; i < membersFilter.length; i++) {
      let mc = memberCards.find((m) => m.memberId === membersFilter[i].id);
      if (!mc) return [];
      mcs.push(mc);
    }
    return mcs;
  };

  const getCardHasSelectMember = () => {
    let cardArr = [];
    let memberCs = filterMembersByUserId();

    for (let i = 0; i < memberCs.length; i++) {
      let card = cards.find((c) => c.id === memberCs[i].cardId);

      if (!card) return [];
      cardArr.push(card);
    }
    return cardArr;
  };

  useEffect(() => {
    if (member) {
      let cardArr = getCardHasSelectMember();
      dispatch(filterCardNoMembers(cardArr));
    } else {
      dispatch(findAllCards());
    }
  }, [member, membersFilter]);

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
      let cardArr = getCardNonMember();
      dispatch(filterCardNoMembers(cardArr));
    } else {
      dispatch(findAllCards());
    }
  }, [noMemberFilter]);

  useEffect(() => {
    if (!currentUser) return;
    if (currentUserMember) {
      let cardArr = getCardsCurrentUser();
      dispatch(filterCardNoMembers(cardArr));
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
          onClick={() => close()}
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
