import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { SECTION_NAMES } from '@/system/auction-details/components/car-details-list/models/models';
import {
  ddStyles,
  dtStyles,
} from '@/system/auction-details/components/car-details-list/sections/sections-styles';

import { Icon } from '@/shared/components';

const SECTIONS_WITH_COPY = new Set(['vin', 'make', 'model']);
interface Props {
  title: string;
  content: string;
  isCorner: boolean;
  sectionName: keyof typeof SECTION_NAMES;
}

type DetailsTranslations =
  Messages['Auction_Page']['auction_details']['car_details_list']['details'];

export const TextSection: React.FC<Props> = ({ title, content, isCorner, sectionName }) => {
  const t = useTranslations('Auction_Page.auction_details.car_details_list.details');
  const [isCopied, setIsCopied] = useState(false);
  const type = isCorner ? 'corner' : 'default';
  const onCopy = async () => {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  const processContent = (content: string) => {
    if (sectionName === 'transmission') {
      return t(`transmission.${content as keyof DetailsTranslations['transmission']}`);
    }

    if (sectionName === 'body_style') {
      return t(`body_style.${content as keyof DetailsTranslations['body_style']}`);
    }

    if (sectionName === 'seller_type') {
      return t(`seller_type.${content as keyof DetailsTranslations['seller_type']}`);
    }

    if (sectionName === 'drive_train') {
      return t(`drive_train.${content as keyof DetailsTranslations['drive_train']}`);
    }

    return content;
  };
  return (
    <React.Fragment>
      <dt className={dtStyles({ type })}>{title}</dt>
      <dd className={ddStyles({ type, className: 'justify-between' })}>
        {processContent(content)}
        {SECTIONS_WITH_COPY.has(sectionName) && (
          <button onClick={onCopy} className="btn btn-sm btn-outline">
            <Icon
              name={!isCopied ? 'copy-to-clipboard' : 'copied-to-clipboard'}
              className="w-6 h-6"
            />
          </button>
        )}
      </dd>
    </React.Fragment>
  );
};
