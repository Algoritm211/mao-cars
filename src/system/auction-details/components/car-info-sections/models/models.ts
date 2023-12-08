import React from 'react';
import { TextSection } from '@/system/auction-details/components/car-info-sections/sections/text-section';
import { VideoSection } from '@/system/auction-details/components/car-info-sections/sections/video-section';
import { CarSections } from '@/maocars-client/schemas';

type SectionTypes = 'text' | 'video';

export const SECTION_NAMES: Record<keyof CarSections, { type: SectionTypes; name: string }> = {
  equipment: { name: 'Equipment', type: 'text' },
  known_flaws: { name: 'Known Flaws', type: 'text' },
  recent_service_history: { name: 'Recent Service History', type: 'text' },
  highlights: { name: 'Highlights', type: 'text' },
  other_items: { name: 'Other Items Included in Sale', type: 'text' },
  videos: { name: 'Videos', type: 'video' },
  modifications: { name: 'Modifications', type: 'text' },
  ownership_history: { name: 'Ownership History', type: 'text' },
};

interface SectionComponents {
  text: React.FC<React.ComponentProps<typeof TextSection>>;
  video: React.FC<React.ComponentProps<typeof VideoSection>>;
}

export const SECTION_COMPONENTS: SectionComponents = {
  text: TextSection,
  video: VideoSection,
};
