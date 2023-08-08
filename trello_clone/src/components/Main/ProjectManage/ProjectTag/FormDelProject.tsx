import React from 'react';
import { Project } from '../../../../types/Project.type';
import { useDispatch } from 'react-redux';
import { remove } from '../../../../redux/reducers/projectSlice';
import { notify } from '../../../../redux/reducers/notifySlice';

interface FormDelProjectProps {
  project: Project;
  close: () => void;
  type: string;
}

const FormDelProject = ({ type, project, close }: FormDelProjectProps) => {
  const dispatch = useDispatch();
  const userLocal = localStorage.getItem('userLogin');
  const currentUser = userLocal ? JSON.parse(userLocal) : null;
  const handleDeleteProject = (projectId: number) => {
    if (!currentUser) return;
    if (type === 'user') {
      let project = {
        id: projectId,
        userId: currentUser.id,
      };
      dispatch(remove(project));
      dispatch(
        notify({
          type: 'success',
          message: 'Delete Successfully!',
        })
      );
    } else {
      dispatch(
        notify({
          type: 'error',
          message: 'No Permission to delete project!',
        })
      );
    }
    setTimeout(() => {
      dispatch(notify(null));
    }, 1000);
  };

  return (
    <div className="bg-[#282E32] w-[304px] rounded-[8px] text-[14px] font-semibold">
      <header className="py-1 px-2 relative">
        <h1 className="text-[#B6C2CF] px-8 h-10 flex items-center justify-center text-center">
          Bạn có muốn xoá ?
        </h1>
        <button
          onClick={close}
          className="absolute z-10 top-2.5 right-1 text-[#B6C2CF] py-1 px-2"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </header>
      <div className="px-3 pb-3">
        <p className="text-[14px] text-[#B6C2CF] font-normal mb-2">
          Không gian làm việc sẽ bị xoá vĩnh viễn và không bao giờ lấy lại được.
        </p>

        <button
          onClick={() => handleDeleteProject(project.id)}
          className="bg-[#F87462] hover:bg-[#FF9C8F] transition-all ease-in duration-100 font-normal rounded-[3px] text-[#1D2125] w-full text-[14px] py-[6px] px-3"
        >
          Xoá không gian làm việc
        </button>
      </div>
    </div>
  );
};

export default FormDelProject;
