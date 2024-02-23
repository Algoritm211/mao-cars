import { clsx } from 'clsx';
import React from 'react';

import { Badge, Icon, IconName } from '@/shared/components';

interface ProcessStep {
  icon: IconName;
  stepTitle: string;
}

const STEPS_PROCESSING_VEHICLE: ProcessStep[] = [
  {
    icon: 'copy-to-clipboard',
    stepTitle: 'You submit information about your vehicle.',
  },
  {
    icon: 'check-circle',
    stepTitle: 'We’ll let you know if your car is accepted.',
  },
  {
    icon: 'picture',
    stepTitle: 'If accepted, we’ll ask you for more information and photos of your car.',
  },
  {
    icon: 'chat-bubble',
    stepTitle: 'We work with you to create a listing page that describes your vehicle.',
  },
  {
    icon: 'calendar',
    stepTitle: 'We’ll also ask for your scheduling preference.',
  },
  {
    icon: 'copied-to-clipboard',
    stepTitle: 'Your listing will be featured for a week.',
  },
  {
    icon: 'star',
    stepTitle:
      'When your car sells, we’ll connect you with the high bidder so you can complete the transaction!',
  },
];

export const HowItWorks = () => {
  return (
    <div className="">
      <h3 className="text-3xl text-center font-bold mb-4">How it works</h3>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {STEPS_PROCESSING_VEHICLE.map(({ icon, stepTitle }, index, array) => (
          <li key={stepTitle}>
            {index !== 0 && <hr />}
            <div className="timeline-middle">
              <div className="indicator">
                <Badge
                  className="indicator-item bg-purple-700 text-white"
                  outline={false}
                  title={(index + 1).toString()}
                />
                <div className="p-2 bg-purple-200 rounded-xl">
                  <Icon name={icon} className="w-10 h-10" />
                </div>
              </div>
            </div>
            <div
              className={clsx(
                'h-24',
                index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'
              )}
            >
              <div className="italic mt-3">{stepTitle}</div>
            </div>
            {index !== array.length - 1 && <hr />}
          </li>
        ))}
      </ul>
    </div>
  );
};
