import { useRouter } from 'next/router';
import React from 'react';

import { AccountListingsCars } from '@/system/account/components/account-listings-cars/account-listings-cars';
import { AccountListingsEmpty } from '@/system/account/components/account-listings-empty/account-listings-empty';

import { useGetProfileById } from '@/maocars-client/maocars';

import { EntityContainer } from '@/shared/components';

export const AccountListings = () => {
  const router = useRouter();
  const profileByIdQuery = useGetProfileById(router.query?.id as string);

  return (
    <EntityContainer query={profileByIdQuery}>
      {({ profile }) => {
        return (
          <React.Fragment>
            <h1 className="text-4xl mx-4 font-bold my-4">My Listings</h1>
            <hr className="mx-2" />
            {profile.cars_auctioned.length > 0 ? (
              <AccountListingsCars auctions={profile.cars_auctioned} />
            ) : (
              <AccountListingsEmpty />
            )}
          </React.Fragment>
        );
      }}
    </EntityContainer>
  );
};
