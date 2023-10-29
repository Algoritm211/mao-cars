import React from 'react';

export const AccountProfileInfo = () => {
  return (
    <div
      className='flex flex-col justify-center items-center
      flex-wrap mt-6 md:mt-0 md:flex-row
      md:justify-start md:items-start gap-4'>
      <div className="avatar">
        <div className="w-40 rounded-full">
          <img src="/user/mock-user-photo.jpeg" alt='Photo of the user'/>
        </div>
      </div>
      <div className='flex-grow text-center md:mt-6 md:text-start'>
        <h1 className='text-3xl font-bold'>Alexey_Horbunov</h1>
        <p className='text-gray-500 py-2'>Joined 10/29/2023</p>
      </div>
      <button className='btn justify-self-end md:mt-6 md:mr-2'>Edit profile</button>
    </div>
  );
};
