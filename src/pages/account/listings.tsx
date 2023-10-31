import React from 'react';
import {AccountLayout} from "@/system/account/layout/account-layout";
import {AccountListings} from "@/system/account/account-listings";

const Listings = () => {
  return (
    <AccountLayout>
      <AccountListings />
    </AccountLayout>
  );
};

export default Listings;
