import React, { useContext } from 'react';
import FormAddMember from './FormAddMember';
import FormTask from './FormWork';
import { FeatureContext } from '../CreateFeatureBtn';
import FormDate from './FormDate';

export default function FormFeatureContent() {
  const featureContext = useContext(FeatureContext);
  const formFeatureElement = () => {
    if(!featureContext) return;
    
    if (featureContext.feature.code === 'TV') return <FormAddMember />
    if (featureContext.feature.code === 'VCL') return <FormTask />
    return <FormDate />;
  }
  return (
    <div className="min-h-[175px] scrollable-div overflow-y-scroll justify-start flex flex-col p-3">
      {formFeatureElement()}
      {/* <FormAddMember /> */}
    </div>
  );
}
