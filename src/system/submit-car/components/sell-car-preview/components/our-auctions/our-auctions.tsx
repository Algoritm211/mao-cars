import React from 'react';

export const OurAuctions = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-3xl text-center font-bold mb-4">Our Auctions</h3>
      <div className="flex flex-col md:flex-row max-w-2xl gap-8 bg-green-100 p-4 rounded-xl">
        <p>
          <strong>Reserve Auction</strong>
          <br />A reserve auction has a secret minimum price that you’ll accept in order to sell
          your car. If your reserve isn't met, the car does not sell. We'll work with you to agree
          on a fair reserve price during the submission process.
        </p>
        <p>
          <strong>No Reserve Auction</strong>
          <br />
          An auction without a reserve means that the car will sell to the highest bidder at the end
          of the auction regardless of price. We've found that cars offered with no reserve get more
          bids, more interest, and more attention.
        </p>
      </div>
    </div>
  );
};
