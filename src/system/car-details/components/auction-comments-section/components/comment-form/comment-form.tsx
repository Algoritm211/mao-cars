import React from 'react';
import {button, Icon} from "@/shared/components";

export const CommentForm = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between flex-row md:items-center'>
        <h3 className='text-2xl font-bold'>
          Comments & bids
        </h3>
        <select className="block md:hidden select select-bordered">
          <option>Newest</option>
          <option>Most Upvoted</option>
          <option>Seller Comments</option>
          <option>Bid History</option>
        </select>
        <div className="hidden md:block join join-vertical sm:join-horizontal">
          <button className="btn join-item">Newest</button>
          <button className="btn join-item">Most Upvoted</button>
          <button className="btn join-item">Seller Comments</button>
          <button className="btn join-item">Bid History</button>
        </div>
      </div>
      <form>
        <fieldset>
          <div className="form-control px-3 py-2 rounded-lg bg-base-200">
            <label className="label">
              <span className="label-text">Your comment</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24 mb-2"
              placeholder="Please provide your comment">
            </textarea>
            <button className={button({className: 'self-end btn-sm'})}>
              <Icon name='paper-airplane' className='w-4 h-4' />
              <span>Post comment</span>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
