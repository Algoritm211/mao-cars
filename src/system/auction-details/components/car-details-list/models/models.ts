import React from 'react';

import { TextSection } from '@/system/auction-details/components/car-details-list/sections/text-section';
import { UserSection } from '@/system/auction-details/components/car-details-list/sections/user-section';

enum SectionTypes {
  text = 'text',
  user = 'user',
}

export const SECTION_NAMES = {
  make: { name: 'make', type: SectionTypes.text },
  model: { name: 'model', type: SectionTypes.text },
  mileage: { name: 'mileage', type: SectionTypes.text },
  vin: { name: 'vin', type: SectionTypes.text },
  title_status: { name: 'title_status', type: SectionTypes.text },
  location: { name: 'location', type: SectionTypes.text },
  seller: { name: 'seller', type: SectionTypes.user },
  engine: { name: 'engine', type: SectionTypes.text },
  drive_train: { name: 'drive_train', type: SectionTypes.text },
  transmission: { name: 'transmission', type: SectionTypes.text },
  body_style: { name: 'body_style', type: SectionTypes.text },
  exterior_color: { name: 'exterior_color', type: SectionTypes.text },
  interior_color: { name: 'interior_color', type: SectionTypes.text },
  seller_type: { name: 'seller_type', type: SectionTypes.text },
} as const;

interface SectionComponents {
  text: React.FC<React.ComponentProps<typeof TextSection>>;
  user: React.FC<React.ComponentProps<typeof UserSection>>;
}

export const SECTION_COMPONENTS: SectionComponents = {
  text: TextSection,
  user: UserSection,
};
