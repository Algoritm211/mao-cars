import React from 'react';

import {
  ddStyles,
  dtStyles,
} from '@/system/auction-details/components/car-details-list/sections/sections-styles';

import { UserShort } from '@/maocars-client/schemas';

interface Props {
  title: string;
  content: UserShort;
  isCorner: boolean;
}
export const UserSection: React.FC<Props> = ({ title, content: seller, isCorner }) => {
  const type = isCorner ? 'corner' : 'default';
  return (
    <React.Fragment>
      <dt className={dtStyles({ type })}>{title}</dt>
      <dd className={ddStyles({ type })}>
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src={seller.photo || '/user/no-user.jpeg'} alt="seller photo" />
          </div>
        </div>
        <span className="ml-2">{seller.username}</span>
      </dd>
    </React.Fragment>
  );
};
