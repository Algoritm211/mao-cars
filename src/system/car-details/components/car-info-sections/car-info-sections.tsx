import React from 'react';
import {
  SECTION_COMPONENTS,
  SECTION_NAMES,
} from '@/system/car-details/components/car-info-sections/models/models';
import { CarSections } from '@/maocars-client/schemas';

interface Props {
  sections: CarSections;
}

export const CarInfoSections: React.FC<Props> = ({ sections }) => {
  return (
    <div className="mx-2 md:mx-0">
      {Object.entries(sections).map(([section, value]) => {
        const { name, type } = SECTION_NAMES[section as keyof CarSections];
        const SectionComponent = SECTION_COMPONENTS[type];
        return <SectionComponent key={name} title={name} content={value as string & string[]} />;
      })}
    </div>
  );
};
