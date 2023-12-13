import React from 'react';
import { TextSection } from '@/system/auction-details/components/car-info-sections/sections/text-section';
import { VideoSection } from '@/system/auction-details/components/car-info-sections/sections/video-section';
import { CarSections } from '@/maocars-client/schemas';

type SectionTypes = 'text' | 'video';

type SectionsTranslations = keyof Messages['Auction_Page']['auction_details']['car_info_sections'];

export const SECTION_NAMES: Record<
  keyof CarSections,
  { type: SectionTypes; name: SectionsTranslations }
> = {
  equipment: { name: 'equipment', type: 'text' },
  known_flaws: { name: 'known_flaws', type: 'text' },
  recent_service_history: { name: 'recent_service_history', type: 'text' },
  highlights: { name: 'highlights', type: 'text' },
  other_items: { name: 'other_items', type: 'text' },
  videos: { name: 'videos', type: 'video' },
  modifications: { name: 'modifications', type: 'text' },
  ownership_history: { name: 'ownership_history', type: 'text' },
};

interface SectionComponents {
  text: React.FC<React.ComponentProps<typeof TextSection>>;
  video: React.FC<React.ComponentProps<typeof VideoSection>>;
}

export const SECTION_COMPONENTS: SectionComponents = {
  text: TextSection,
  video: VideoSection,
};
