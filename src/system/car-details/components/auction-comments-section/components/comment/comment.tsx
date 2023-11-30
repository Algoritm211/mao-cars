import React from 'react';
import {Icon} from "@/shared/components";

export const Comment = () => {
  return (
    <div className="px-6 py-3 rounded-lg flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-2">
          <div className="avatar">
            <div className="w-6 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='Comment user photo' />
            </div>
          </div>
          <span className='font-bold'>Alex S</span>
          <div className="badge bg-violet-600 text-white">seller</div>
          <p className="text-sm text-gray-600">
            <time dateTime="February 12th, 2022">Feb. 12, 2022</time>
          </p>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-xs btn-outline btn-circle m-1">
            <Icon name='three-dots' className='w-4 h-4' />
          </div>
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Edit</a></li>
            <li><a>Report</a></li>
          </ul>
        </div>
      </div>
      <p>Much appreciated! Glad you liked it ☺️</p>
      <div className='flex gap-2'>
        <button className='btn btn-sm btn-outline'>
          <Icon name='heart' className='w-4 h-4' />
          34
        </button>
        <button className='btn btn-sm btn-outline'>
          <Icon name='reply' className='w-4 h-4' />
          Reply
        </button>
      </div>
    </div>
  );
};
