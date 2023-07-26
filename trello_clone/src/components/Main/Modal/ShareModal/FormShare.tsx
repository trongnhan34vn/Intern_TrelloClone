import { Listbox, Menu, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { Roles } from '../../../../enum/Roles';
import { useDispatch, useSelector } from 'react-redux';
import { searchByEmail } from '../../../../redux/reducers/userSlice';
import { userSelector } from '../../../../redux/selectors';

const FormShare = () => {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(null);
  const handleSelect = (e: React.FormEvent<HTMLButtonElement>) => {};

  const users = useSelector(userSelector).users;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    dispatch(searchByEmail(value));
  };

  return (
    <div>
      <div className="flex items-center">
        <input
          onChange={handleChange}
          placeholder="Địa chỉ email hoặc tên"
          type="text"
          className="bg-[#22272B] text-[14px] mr-2 border-[2px] rounded-[3px] min-h-[32px] outline-none border-[#A6C5E229] py-[6px] pr-1 pl-3 max-w-[341px] w-full text-[#B6C2CF]"
        />
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="relative cursor-default h-[37px] text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <button className="flex mr-2 rounded-[3px] px-[10px] py-1 bg-[#A1BDD914] h-[37px] text-[#B6C2CF] items-center">
                <span className="text-[14px] leading-[32px] mr-1">
                  Thành viên
                </span>
                <i className="fa-solid text-[12px] fa-angle-down"></i>
              </button>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute text-[#B6C2CF] right-2 top-[calc(100%_+_4px)] max-h-60 w-full overflow-auto rounded-[3px] bg-[#282E33] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Listbox.Option
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4`
                  }
                  value={1}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        Thành viên
                      </span>
                    </>
                  )}
                </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <button className="bg-[#579DFF] rounded-[3px] h-[37px] text-[14px] py-[6px] px-[12px]">
          Chia sẻ
        </button>
      </div>
    </div>
  );
};

export default FormShare;
