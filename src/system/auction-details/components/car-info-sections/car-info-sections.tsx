import { CarSections } from '@/maocars-client/schemas';
import { useTranslations } from 'next-intl';
import React from 'react';

import {
  SECTION_COMPONENTS,
  SECTION_NAMES,
} from '@/system/auction-details/components/car-info-sections/models/models';

interface Props {
  sections: CarSections;
}

export const CarInfoSections: React.FC<Props> = ({ sections }) => {
  const t = useTranslations('Auction_Page.auction_details.car_info_sections');
  return (
    <div className="mx-2 md:mx-0">
      {Object.entries(sections).map(([section, value]) => {
        const { name, type } = SECTION_NAMES[section as keyof CarSections];
        const SectionComponent = SECTION_COMPONENTS[type];
        return <SectionComponent key={name} title={t(name)} content={value as string & string[]} />;
      })}
    </div>
  );
};
