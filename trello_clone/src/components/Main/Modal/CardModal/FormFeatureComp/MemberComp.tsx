import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as memberSlice from '../../../../../redux/reducers/memberSlice';
import * as userSlice from '../../../../../redux/reducers/userSlice';
import { userSelector } from '../../../../../redux/selectors';
import { Member, MemberForm, MemberUpdateCard } from '../../../../../types/Member.type';
import { User } from '../../../../../types/User.type';
import { CardContext } from '../CardModal';
import { SubnavContext } from '../../../DetailProject/DetailProject';



interface MemberProps {
  member: Member;
  inputValue: string;
  search: User[];
}

const MemberComp = ({ member, inputValue, search }: MemberProps) => {
  const dispatch = useDispatch();
  const { tableId } = useParams();
  const subnavContext = useContext(SubnavContext);
  const cardContext = useContext(CardContext);

  const users = subnavContext? subnavContext.users : [];
  const usersFilter: User[] = users.filter((user) => user.id === member.userId);
  const searchFilter: User[] = search.filter(
    (user) => user.id === member.userId
  );

  const getMemberElement = () => {
    if (inputValue.trim() !== '') {
      return searchFilter;
    }
    return usersFilter;
  };

  const checkExist = (cardId: number) => {
    if(member.cardId === cardId) return true;
    return false;
  }

  const handleUpdateCard = (id: number) => {
    if (!cardContext) return;
    let card_member: MemberForm = {
      cardId: cardContext.id,
      userId: member.userId,
      role: member.role,
      tableId: tableId ? +tableId : 0,
    };
    dispatch(memberSlice.createMember(card_member));
  };

  const memberElement = getMemberElement().map((user) => {
    return (
      <div
        key={user.id}
        onClick={() => handleUpdateCard(member.id)}
        className="flex items-center cursor-pointer hover:bg-[#A6C5E229] p-2 rounded-[4px]"
      >
        <img
          src={user.imageUrl}
          className=" w-8 h-8 rounded-[50%] flex items-center text-[#fff] mr-2 justify-center"
        />

        <p className="text-[#B6C2CF] text-[14px]">
          {user.fullName} ({user.email})
        </p>
      </div>
    );
  });

  return <>{memberElement}</>;
};

export default MemberComp;
