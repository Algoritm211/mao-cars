import React from 'react';
import {Sections} from "@/core/interfaces/api/auction";
import {SECTION_COMPONENTS, SECTION_NAMES} from "@/system/car-details/components/car-info-sections/models/models";

interface Props {
  sections: Sections
}

export const CarInfoSections: React.FC<Props> = ({sections}) => {
  return (
    <div className='mx-2 md:mx-0'>
      {(Object.entries(sections)).map(([section, value]) => {
        const {name, type} = SECTION_NAMES[section as keyof Sections];
        const SectionComponent = SECTION_COMPONENTS[type]
        return <SectionComponent key={name} title={name} content={value} />
      })}
    </div>
  );
};
