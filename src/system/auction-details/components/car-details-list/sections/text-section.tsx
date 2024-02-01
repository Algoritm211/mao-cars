import React, {useState} from 'react';

import {
  ddStyles,
  dtStyles,
} from '@/system/auction-details/components/car-details-list/sections/sections-styles';
import {Icon} from "@/shared/components";
import {SECTION_NAMES} from "@/system/auction-details/components/car-details-list/models/models";

const SECTIONS_WITH_COPY = new Set(['vin', 'make', 'model']);
interface Props {
  title: string;
  content: string;
  isCorner: boolean;
  sectionName: keyof typeof SECTION_NAMES;
}

export const TextSection: React.FC<Props> = ({ title, content, isCorner, sectionName }) => {
  const [isCopied, setIsCopied] = useState(false);
  const type = isCorner ? 'corner' : 'default';
  const onCopy = async () => {
    await navigator.clipboard.writeText(content);
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    },3000)
  }
  return (
    <React.Fragment>
      <dt className={dtStyles({ type })}>{title}</dt>
      <dd className={ddStyles({ type, className: 'justify-between' })}>
        {content}
        {SECTIONS_WITH_COPY.has(sectionName) &&
          <button onClick={onCopy} className='btn btn-sm btn-outline'>
            <Icon name={!isCopied ? 'copy-to-clipboard' : 'copied-to-clipboard'} className='w-6 h-6'/>
          </button>
        }
      </dd>
    </React.Fragment>
  );
};
