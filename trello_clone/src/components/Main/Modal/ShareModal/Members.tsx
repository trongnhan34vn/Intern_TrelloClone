import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Roles } from '../../../../enum/Roles';
import { Member, MemberUpdateForm } from '../../../../types/Member.type';
import { getAcronym } from '../../../../utils/getAcronym';
import SelectRoles from './SelectRoles';
import * as userSlice from '../../../../redux/reducers/userSlice';
import { userSelector } from '../../../../redux/selectors';
import { User } from '../../../../types/User.type';

interface MembersProps {
  member: Member;
  currentUser: User | null;
}
const roles = [Roles.MEMBER, Roles.OBSERVER];

const Members = ({ member, currentUser }: MembersProps) => {
  const dispatch = useDispatch();
  const [selectRoles, setSelectRoles] = useState(roles[0]);
  const users = useSelector(userSelector).users;

  useEffect(() => {
    if (!member) return;
    dispatch(userSlice.findAll());
  }, [member]);

  useEffect(() => {
    if (!member) return;
    switch (member.role) {
      case Roles.ADMIN:
        setSelectRoles(Roles.ADMIN);
        break;
      case Roles.MEMBER:
        setSelectRoles(Roles.MEMBER);
        break;
      default:
        setSelectRoles(Roles.OBSERVER);
        break;
    }
  }, [member]);

  useEffect(() => {
    let memberUpdateRoles: MemberUpdateForm = {
      role: selectRoles,
      id: member.id,
    };
  }, [selectRoles]);

  const usersFilter = users.filter((user) => user.id === member.userId);

  const usersElement = usersFilter.map((user) => {
    if (!currentUser) return;
    return (
      <div key={user.id} className="flex pt-4  items-center justify-between">
        <div className="flex items-center ">
          <div className="bg-red-500 mr-3 rounded-[50%] w-8 h-8 flex justify-center items-center">
            <span className="">{getAcronym(user ? user.fullName : null)}</span>
          </div>
          <div className="flex flex-col justify-between text-[14px] text-[#B6C2CF]">
            <span className="font-bold">
              {user.id ? user.fullName : ''}{' '}
              {currentUser.id === user.id ? '(bạn)' : ''}
            </span>
            <span className="">{user ? user.email : ''}</span>
          </div>
        </div>
        <SelectRoles
          selectRoles={selectRoles}
          setSelectRoles={setSelectRoles}
          roles={roles}
        />
      </div>
    );
  });

  return <div>{usersElement}</div>;
};

export default Members;
