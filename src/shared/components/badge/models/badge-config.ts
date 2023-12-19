import { VariantProps } from 'class-variance-authority';

import { badge } from '@/shared/components';

// You can add your namespace for badges later
type BadgeMessages = `auction.${keyof Messages['Common']['badges']['auction']}`;

export interface BadgeConfig<DataObject> {
  key: keyof DataObject;
  title: BadgeMessages;
  variant: VariantProps<typeof badge>['variant'];
  className?: string;
}
