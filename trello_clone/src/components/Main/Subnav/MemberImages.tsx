import React, { useEffect } from 'react';
import { Member } from '../../../types/Member.type';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../../redux/selectors';
import * as userSlice from '../../../redux/reducers/userSlice';

interface MemberImagesProps {
  member: Member;
}

const MemberImages = ({ member }: MemberImagesProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userSlice.findAll());
  }, [member]);

  const users = useSelector(userSelector).users;

  const userFilter = users.filter(user => user.id === member.userId);
  const imageElement = userFilter.map(user => <img key={user.id} src={user.imageUrl} className="w-[32px] rounded-[50%] h-[32px]" alt="" />)

  return (
    <div>
      {imageElement}
    </div>
  );
};

export default MemberImages;
