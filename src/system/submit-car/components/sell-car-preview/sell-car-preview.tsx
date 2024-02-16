import React from 'react';

import { GetStartedNow } from '@/system/submit-car/components/sell-car-preview/components/get-started-now/get-started-now';
import { OurAuctions } from '@/system/submit-car/components/sell-car-preview/components/our-auctions/our-auctions';
import { RecentSales } from '@/system/submit-car/components/sell-car-preview/components/recent-sales/recent-sales';

import { ApplyToSale } from './components/apply-to-sale/apply-to-sale';
import { HeadTitle } from './components/head-title/head-title';
import { OfferToCustomers } from './components/offer-to-customers/offer-to-customers';
import { WhyMaoCars } from './components/why-maocars/why-maocars';

export const SellCarPreview = () => {
  return (
    <section className="mx-2 lg:m-0">
      <HeadTitle />
      <OfferToCustomers />
      <ApplyToSale />
      <WhyMaoCars />
      <RecentSales />
      <OurAuctions />
      <GetStartedNow />
    </section>
  );
};
