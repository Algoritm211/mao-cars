import React from 'react';
import { clsx } from 'clsx';
import { AuctionExtended, Listing } from '@/core/interfaces/api/auction';
import { SECTION_COMPONENTS, SECTION_NAMES } from './models/models';
import { GetAuctionById200 } from '@/maocars-client/schemas';
import { useTranslations } from 'next-intl';

interface Props {
  auction: GetAuctionById200;
}

export const CarDetailsList: React.FC<Props> = ({ auction }) => {
  const t = useTranslations('Auction_Page.auction_details.car_details_list');

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
            title={t(name)}
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
