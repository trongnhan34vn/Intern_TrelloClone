import React from 'react';
import FormAddMember from './FormFeatureComp/FormAddMember';
import FormFeatureContent from './FormFeatureComp/FormFeatureContent';
import HeaderFormFeature from './FormFeatureComp/HeaderFormFeature';


export interface FormFeatureState {
  closeFn : () => void;
}

export default function FormFeature({closeFn}: FormFeatureState) {
  return (
    <div
      className={`w-[304px] absolute z-[999] transition-all ease-in-out duration-200 rounded-[8px] min-h-fit bg-[#282E33] top-0 left-0`}
    >
      <HeaderFormFeature closeFn={closeFn} />
      <FormFeatureContent />
    </div>
  );
}
