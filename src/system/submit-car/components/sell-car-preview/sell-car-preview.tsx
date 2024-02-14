import React from 'react';
import {button} from "@/shared/components";
import Link from "next/link";
import {clsx} from "clsx";
import {
  OfferToCustomers
} from "@/system/submit-car/components/sell-car-preview/components/offer-to-customers/offer-to-customers";

export const SellCarPreview = () => {
  const textAccent = 'block w-fit relative after:block after:absolute after:w-full after:border after:rounded after:bg-purple-300 after:h-2 after:-z-10 after:bottom-0.5'
  return (
    <section className='mx-2 md:m-0'>
      <div>
        <h1 className={clsx('text-4xl font-bold mb-3', textAccent)}>Sell on MaoCars!</h1>
        <h2 className='text-3xl font-bold mb-3'>More money, fewer headaches</h2>
      </div>
      <OfferToCustomers />
      <Link href='/sell-car/submit' className={button()}>Sell now, it`s free</Link>
    </section>
  );
};
