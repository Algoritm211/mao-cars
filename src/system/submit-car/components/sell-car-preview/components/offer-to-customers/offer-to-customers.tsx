import React from 'react';

import { Icon, IconName, IconProps } from '@/shared/components';

interface CustomerPhrase {
  icon: IconName;
  text: string;
}

const phrases: CustomerPhrase[] = [
  {
    icon: 'chat-bubble',
    text: 'Live support from listing to post-sale',
  },
  {
    icon: 'calendar',
    text: 'Sell your car faster and go from submission to auction in under a week',
  },
  {
    icon: 'check-circle',
    text: 'Access our huge audience of engaged enthusiasts',
  },
  {
    icon: 'currency-dollar',
    text: 'Sell for free and receive 100% of the sale price',
  },
];

export const OfferToCustomers = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-8">
      <div className="flex gap-2 flex-col">
        {phrases.map(({ icon, text }) => {
          return (
            <div className="flex gap-2 items-center" key={icon}>
              <div className="bg-violet-100 border rounded p-1">
                <Icon name={icon} className="w-6 h-6" />
              </div>
              <span>{text}</span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-2">Our customers love us</h2>
        <div className="w-full h-full p-3 bg-yellow-100 rounded-xl">
          <div className="flex gap-1">
            {new Array(5).fill(null).map((_, index) => (
              <div key={index} className="w-5 h-5 bg-yellow-600 mask mask-star" />
            ))}
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Kyle R.</span>
            <time className="text-gray-600 self-end text-sm" dateTime="Feb 2024">
              Feb 2024
            </time>
          </div>
          <p>
            Probably the best experience I've had selling a car privately. The listing team was
            exceptionally helpful, and I had funds just 3 days after the auction ended. Great
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};
