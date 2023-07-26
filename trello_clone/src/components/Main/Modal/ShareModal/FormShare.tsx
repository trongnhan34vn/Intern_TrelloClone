import { Combobox, Listbox, Menu, Transition } from '@headlessui/react';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Roles } from '../../../../enum/Roles';
import { createMember } from '../../../../redux/reducers/memberSlice';
import { searchByEmail } from '../../../../redux/reducers/userSlice';
import { projectSelector, userSelector } from '../../../../redux/selectors';
import { MemberForm } from '../../../../types/Member.type';
import { User } from '../../../../types/User.type';
import { SubnavContext } from '../../DetailProject/DetailProject';
import InputSearch from './InputSearch';
import SelectRoles from './SelectRoles';

const roles = [Roles.MEMBER, Roles.OBSERVER];

const FormShare = () => {
  const dispatch = useDispatch();
  const [selectRoles, setSelectRoles] = useState(roles[0]);
  const [selectUser, setSelectUser] = useState<User | null>(null);
  const [query, setQuery] = useState<string>('');
  const [selectUsers, setSelectUsers] = useState<User[]>([]);

  const userLocal = localStorage.getItem('userLogin');
  const currentUser: User = userLocal ? JSON.parse(userLocal) : null;

  const users = useSelector(userSelector).users;

  const selectProject = useSelector(projectSelector).selectProject;

  const subNavContext = useContext(SubnavContext);

  useEffect(() => {
    dispatch(searchByEmail(query));
  }, [query]);

  const exchangeToMember = (user: User) => {
    let member: MemberForm = {
      email: user.email,
      fullName: user.fullName,
      imgUrl: user.imageUrl,
      tableId: subNavContext? subNavContext.tableId : 0,
      role: Roles.MEMBER,
    };
    return member;
  };

  useEffect(() => {
    if (!selectUser) return;
    if (!checkExists(selectUser, selectUsers)) {
      console.log("in");
      setSelectUsers([...selectUsers, selectUser]);
      let member = exchangeToMember(selectUser);
      setMembers([...members, member]);
    }
  }, [selectUser]);

  const [members, setMembers] = useState<MemberForm[]>([]);

  const checkExists = (user: User, users: User[]) => {
    return users.find((u) => u.id === user.id);
  };

  useEffect(() => {
    let arr = members;
    for (let i = 0; i < arr.length; i++) {
      arr[i].role = selectRoles
    }
    setMembers(arr);
  },[selectRoles])

  const handleSubmit = () => {
    for (let i = 0; i < members.length; i++) {
      dispatch(createMember(members[i]))
    }

  }

  return (
    <div>
      <div className="flex items-center">
        <div className="relative w-full max-w-[341px] mr-2">
          <InputSearch
            selectUser={selectUser}
            setSelectUser={setSelectUser}
            users={users}
            query={query}
            setQuery={setQuery}
            currentUser={currentUser}
            members={members}
            setMembers={setMembers}
            setSelectUsers={setSelectUsers}
            selectUsers={selectUsers}
          />
        </div>
        <SelectRoles
          selectRoles={selectRoles}
          setSelectRoles={setSelectRoles}
          roles={roles}
        />

        <button onClick={handleSubmit} className="bg-[#579DFF] hover:opacity-90 opacity-100 transition-all ease-in-out duration-200 rounded-[3px] h-[37px] text-[14px] py-[6px] px-[12px]">
          Chia sẻ
        </button>
      </div>
    </div>
  );
};

export default FormShare;
