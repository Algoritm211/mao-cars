import React from 'react';
import { clsx } from 'clsx';
import { AuctionExtended, Listing } from '@/core/interfaces/api/auction';
import { SECTION_COMPONENTS, SECTION_NAMES } from './models/models';

const MOCK_CAR = {
  Make: 'Rolls-Royce',
  Model: 'Phantom',
  Mileage: 34000,
  VIN: 'SCA1S68588UX08753',
  'Title Status': 'Clean (CA)',
  Location: 'Cerritos, CA 90703',
  Seller: 'centinela1',
  Engine: '6.75L V12',
  Drivetrain: 'Rear-wheel drive',
  Transmission: 'Automatic (6-Speed)',
  'Body Style': 'Sedan',
  'Exterior Color': 'Black',
  'Interior Color': 'Tan',
  'Seller Type': 'Private Party',
};

interface Props {
  auction: AuctionExtended;
}

export const CarDetailsList: React.FC<Props> = ({ auction }) => {
  const generateDataList = (start: number, end?: number) => {
    return Object.entries(SECTION_NAMES)
      .slice(start, end)
      .map(([key, value], index, arr) => {
        const content =
          auction?.[key as keyof AuctionExtended] || auction?.listing?.[key as keyof Listing];
        const { type, name } = value;
        const Component = SECTION_COMPONENTS[type];
        return (
          <Component
            key={name}
            title={name}
            content={content as string}
            isCorner={index !== arr.length - 1}
          />
        );
      });
  };

  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-2">
      <dl className="grid grid-cols-[33%_67%] border border-gray-200">{generateDataList(0, 7)}</dl>
      <dl className="grid grid-cols-[33%_67%] border-r border-b md:border-t border-gray-200">
        {generateDataList(7)}
      </dl>
    </div>
  );
};
