import Link from 'next/link';
import React from 'react';

import { button } from '@/shared/components';

export const GetStartedNow = () => {
  return (
    <div className="text-center my-8">
      <Link href="/sell-car/submit" className={button({ className: 'btn-lg' })}>
        Get Started Now
      </Link>
    </div>
  );
};
