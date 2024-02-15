import Link from 'next/link';
import React from 'react';

import { button } from '@/shared/components';

export const ApplyToSale = () => {
  return (
    <div className="text-center my-4">
      <h3 className="text-3xl font-bold mb-3">Apply in minutes and we’ll respond within a day.</h3>
      <Link href="/sell-car/submit" className={button()}>
        Sell now, it`s free
      </Link>
    </div>
  );
};
