import React from 'react';

interface Props {
  ribbonTitle?: string;
}

export const AuctionCardRibbon: React.FC<Props> = ({ ribbonTitle }) => {
  return (
    <div className="z-20 absolute right-0 top-0 h-16 w-16">
      <div
        className="absolute transform rotate-45
           bg-red-600 text-center text-white font-semibold py-1
           right-[-35px] top-[32px] w-[170px]"
      >
        {ribbonTitle}
      </div>
    </div>
  );
};
