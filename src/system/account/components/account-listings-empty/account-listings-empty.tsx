import React from 'react';

export const AccountListingsEmpty = () => {
  return (
    <div className='flex flex-col my-4 justify-center'>
      <p className='text-center'>
        You have not submitted any cars yet. Want to sell your car?
      </p>
      <a className='btn btn-accent m-auto my-2'>
        Get started
      </a>
    </div>
  );
};
