import React from 'react';
import { Member } from '../../../../../types/Member.type';
import CardMemberImg from './CardMemberImg';

interface CardMembersProps {
  members: Member[]
}

const CardMembers = ({members}: CardMembersProps) => {

  const memberElement = members.map(member => {
    return (
      <CardMemberImg key={member.id} member={member} />
    )
  })

  return (
    <div>
      <div className="text-[#9FADBC] text-left text-[12px] font-bold mb-2">
        Thành viên
      </div>
      <div className="flex">
        {memberElement}
      </div>
    </div>
  );
};

export default CardMembers;
