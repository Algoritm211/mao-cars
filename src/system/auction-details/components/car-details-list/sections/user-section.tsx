import React from 'react';

import {
  ddStyles,
  dtStyles,
} from '@/system/auction-details/components/car-details-list/sections/sections-styles';

import { UserShort } from '@/maocars-client/schemas';
import {SECTION_NAMES} from "@/system/auction-details/components/car-details-list/models/models";
import Link from "next/link";

interface Props {
  title: string;
  content: UserShort;
  isCorner: boolean;
  sectionName: keyof typeof SECTION_NAMES;
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
        <Link href={`/account/${seller.id}`} className="link ml-2 hover:text-violet-600">{seller.username}</Link>
      </dd>
    </React.Fragment>
  );
};
