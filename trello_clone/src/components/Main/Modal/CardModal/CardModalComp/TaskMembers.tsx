import React, { useContext, useEffect } from 'react';
import { Member, MemberUpdateTask } from '../../../../../types/Member.type';
import { SubnavContext } from '../../../DetailProject/DetailProject';
import { useParams } from 'react-router-dom';
import { FeatureContext } from '../CreateFeatureBtn';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../../../../redux/reducers/memberSlice';
import { TaskUpdateMember } from '../../../../../types/Task.type';
import { updateMember } from '../../../../../redux/reducers/taskSlice';

interface TaskMembersProps {
  member: Member;
}

export const TaskMembers = ({ member }: TaskMembersProps) => {
  const dispatch = useDispatch();
  const { tableId } = useParams();
  const subNavContext = useContext(SubnavContext);
  const featureContext = useContext(FeatureContext);
  const task = featureContext ? featureContext.task : null;
  const users = subNavContext ? subNavContext.users : [];
  const usersFilter = users.filter((user) => user.id === member.userId);

  const handleUpdateTask = (id: number) => {
    if(!task) return;
    let taskUpdate: TaskUpdateMember = {
      member: id,
      id: task.id,
    }
    dispatch(updateMember(taskUpdate))
  };

  const memberElement = usersFilter.map((user) => {
    return (
      <div
        key={user.id}
        onClick={() => handleUpdateTask(member.id)}
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
