import React from 'react';
import {usePathname, } from "next/navigation";

export const CarDetailsHeader = () => {
  const pathname = usePathname();

  const onCopyLink = () => {
    const location = window?.location?.origin;
    void navigator.clipboard.writeText(`${location}${pathname}`);
  }
  return (
    <>
      <div className='py-4 px-2 grid gap-2 md:grid-cols-[auto_40%] items-center'>
        <div className='flex-grow-0'>
          <h1 className='text-2xl font-bold'>2010 Rolls-Royce Phantom Extended</h1>
          <h2 className='text-gray-600'>~34,000 Miles, V12 Power, Mostly Unmodified, Florida- and California-Owned</h2>
        </div>
        <div className='flex justify-around md:justify-end'>
          <button className="btn flex-grow mr-2 md:flex-grow-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            Watch
          </button>
          <button className="btn flex-grow md:flex-grow-0" onClick={onCopyLink}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
            Share
          </button>
        </div>
      </div>
    </>

  );
};
