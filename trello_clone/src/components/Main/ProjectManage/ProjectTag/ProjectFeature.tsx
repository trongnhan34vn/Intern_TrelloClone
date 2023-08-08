import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import FormDelProject from './FormDelProject';
import { Project, ProjectDTO } from '../../../../types/Project.type';

export interface FeatureProject {
  name: string;
  icon: string;
}

const features: FeatureProject[] = [
  {
    name: 'Bảng',
    icon: 'fa-solid fa-table mr-[8px]',
  },
  {
    name: 'Dạng xem',
    icon: 'fa-solid fa-chart-pie mr-[8px]',
  },
  {
    name: 'Thành viên',
    icon: 'fa-regular fa-user mr-[8px]',
  },
  {
    name: 'Cài đặt',
    icon: 'fa-solid fa-gear mr-[8px]',
  },
];

interface ProjectFeature {
  project: Project;
  type: string;
}

const ProjectFeature = ({type, project }: ProjectFeature) => {
  return (
    <>
      {features.map((feature) => {
        return (
          <Popover key={feature.name} className="">
            <Popover.Button className="hover:bg-[#A6C5E229] outline-none bg-[#A1BDD914] rounded-[3px] text-[#B6C2CF] inline-block mb-2 ml-2 py-[6px] pl-[6px] pr-3">
              <i className={feature.icon}></i>
              <span className="text-[14px] font-semibold">{feature.name}</span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              {feature.name === 'Cài đặt' ? (
                <Popover.Panel className="absolute top-[70%] z-10">
                  {({ close }) => (
                    <FormDelProject type={type} project={project} close={close} />
                  )}
                </Popover.Panel>
              ) : (
                <></>
              )}
            </Transition>
          </Popover>
        );
      })}
    </>
  );
};

export default ProjectFeature;
