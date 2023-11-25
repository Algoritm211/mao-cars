import React, { PropsWithChildren } from 'react';

export const AuctionContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="my-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {children}
    </div>
  );
};
