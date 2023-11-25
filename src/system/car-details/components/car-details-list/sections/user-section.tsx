import React from 'react';
import { Seller } from '@/core/interfaces/api/seller';
import {
  ddStyles,
  dtStyles,
} from '@/system/car-details/components/car-details-list/sections/sections-styles';

interface Props {
  title: string;
  content: Seller;
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
