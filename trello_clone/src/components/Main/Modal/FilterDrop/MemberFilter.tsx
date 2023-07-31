import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment, SetStateAction, useState } from 'react';
import { Member } from '../../../../types/Member.type';
import { User } from '../../../../types/User.type';

interface MemberFilterProps {
  setMemberFilter: React.Dispatch<SetStateAction<boolean>>;
  setCurrentUserMember: React.Dispatch<SetStateAction<boolean>>;
  membersFilterTable: Member[];
  users: User[];
  member: Member | null;
  setMember: React.Dispatch<SetStateAction<Member | null>>
}

const MemberFilter = ({
  setMemberFilter,
  setCurrentUserMember,
  membersFilterTable,
  users,
  setMember,
  member
}: MemberFilterProps) => {


  const getNameMember = (member: Member) => {
    let user = users.find((user) => user.id === member.userId);
    if (!user) return;
    return { fullName: user.fullName, email: user.email, image: user.imageUrl };
  };

  return (
    <div className="member">
      <label className="text-[12px] font-bold text-[#9FADBC] block mt-4 mb-2">
        Thành viên
      </label>
      <div>
        {/* Thẻ không có thành viên tham gia */}
        <div className="text-[14px] text-[#B6C2CF] p-2 leading-5 flex items-center">
          <input
            onChange={(e) => setMemberFilter(e.target.checked)}
            type="checkbox"
            className="mr-2"
          />
          <span>Không có thành viên</span>
        </div>
        {/* Thẻ có thành viên tham gia là currentUser */}
        <div className="text-[14px] text-[#B6C2CF] p-2 leading-5 flex items-center">
          <input
            onChange={(e) => setCurrentUserMember(e.target.checked)}
            type="checkbox"
            className="mr-2"
          />
          <span>Các thẻ chỉ định tôi</span>
        </div>
        {/* Thẻ có thành viên được chọn tham gia */}
        <div className="text-[14px] text-[#B6C2CF] p-2 leading-5 flex items-center">
          <input type="checkbox" className="mr-2" />
          <Listbox value={member} onChange={setMember}>
            <div className="w-full relative">
              <Listbox.Button className="relative w-full mr-2  cursor-default h-[37px] text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <button className="flex rounded-[3px] w-full px-[10px] py-1 bg-[#A1BDD914] h-[37px] text-[#B6C2CF] items-center">
                  <span className="text-[14px] text-left flex-1 leading-[32px] mr-1">
                    Chọn thành viên
                  </span>
                  <i className="fa-solid text-[12px]  fa-angle-down"></i>
                </button>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-[100] w-full text-[#B6C2CF] right-0 top-[calc(100%_+_4px)] max-h-60 overflow-auto rounded-[3px] bg-[#282E33] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {membersFilterTable.map((member) => {
                    return (
                      <Listbox.Option
                        key={member.id}
                        className={({ active }) =>
                          `relative hover:bg-[#A6C5E229]  transition-all ease-in duration-200 select-none py-2 pl-4 pr-4 `
                        }
                        value={member}
                      >
                        {({ selected }) => (
                          <>
                            <div className="flex items-center ">
                              <div className=" mr-3 rounded-[50%] w-8 h-8 flex justify-center items-center">
                                <img
                                  className="rounded-[50%]"
                                  src={getNameMember(member)?.image}
                                  alt=""
                                />
                              </div>
                              <div className="flex flex-col justify-between text-[14px] text-[#B6C2CF]">
                                <span className="font-bold">
                                  {getNameMember(member)?.fullName}{' '}
                                </span>
                                <span className="">
                                  {getNameMember(member)?.email}
                                </span>
                              </div>
                            </div>
                          </>
                        )}
                      </Listbox.Option>
                    );
                  })}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  );
};

export default MemberFilter;
