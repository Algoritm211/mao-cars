import { clsx } from 'clsx';
import React from 'react';

export const HeadTitle = () => {
  const textAccent =
    'block w-fit relative after:block after:absolute after:w-full after:border after:rounded after:bg-purple-300 after:h-2 after:-z-10 after:bottom-0.5';
  return (
    <div className="mb-10">
      <h1 className={clsx('text-4xl font-bold mb-3', textAccent)}>Sell on Mao Cars!</h1>
      <h2 className="text-3xl font-bold mb-3">More money, fewer headaches</h2>
    </div>
  );
};
