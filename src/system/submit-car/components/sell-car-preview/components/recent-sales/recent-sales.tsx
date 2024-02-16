import React from 'react';

import { Badge } from '@/shared/components';
import { currencyFormatter } from '@/shared/utils';

const recentSales = [
  {
    carMakeModel: '1997 Lotus Esprit',
    imageUrl: '/sell-preview/cars/lotus-v8.jpeg',
    price: 57_000,
  },
  {
    carMakeModel: '2011 Subaru Impreza WRX STI',
    imageUrl: '/sell-preview/cars/subaru-wrx-sti.jpeg',
    price: 25_000,
  },
  {
    carMakeModel: '2021 Range Rover Autobiography LWB',
    imageUrl: '/sell-preview/cars/range-rover.jpeg',
    price: 63_500,
  },
  {
    carMakeModel: '2019 Ford F-450',
    imageUrl: '/sell-preview/cars/ford-f450.jpeg',
    price: 69_800,
  },
];

export const RecentSales = () => {
  return (
    <div className="my-8">
      <h3 className="text-3xl text-center font-bold mb-4">Recent sales</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {recentSales.map(({ carMakeModel, price, imageUrl }) => {
          return (
            <div key={carMakeModel} className="w-40 bg-base-100">
              <figure>
                <img className="rounded" src={imageUrl} alt={carMakeModel} />
              </figure>
              <div>
                <Badge
                  className="text-base"
                  variant="neutral"
                  outline={false}
                  title={`Sold for ${currencyFormatter(price)}`}
                />
                <h5 className="font-bold">{carMakeModel}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
