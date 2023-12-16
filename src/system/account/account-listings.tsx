import React from 'react';

import { AccountListingsCars } from '@/system/account/components/account-listings-cars/account-listings-cars';
import { AccountListingsEmpty } from '@/system/account/components/account-listings-empty/account-listings-empty';

export const AccountListings = () => {
  const isHaveCars = true;
  return (
    <React.Fragment>
      <h1 className="text-4xl mx-4 font-bold my-4">My Listings</h1>
      <hr className="mx-2" />
      {isHaveCars ? <AccountListingsCars /> : <AccountListingsEmpty />}
    </React.Fragment>
  );
};
