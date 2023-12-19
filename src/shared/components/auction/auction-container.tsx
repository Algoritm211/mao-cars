import React, { PropsWithChildren } from 'react';

export const AuctionContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="my-5 grid gap-5 justify-items-center
      lg:grid-cols-3 sm:grid-cols-2"
    >
      {children}
    </div>
  );
};
