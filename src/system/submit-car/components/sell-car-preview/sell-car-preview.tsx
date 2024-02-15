import React from 'react';

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
    </section>
  );
};
