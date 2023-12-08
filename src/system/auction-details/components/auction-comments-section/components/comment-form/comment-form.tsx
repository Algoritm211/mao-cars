import React, { useState } from 'react';
import { button, Icon } from '@/shared/components';
import { COMMENT_FILTER } from '@/system/auction-details/components/auction-comments-section/components/comment-form/models/form-constants';
import { clsx } from 'clsx';
import { useForm } from 'react-hook-form';

interface Inputs {
  comment: string;
}

export const CommentForm = () => {
  const [commentFilter, setCommentFilter] = useState(COMMENT_FILTER[0]);
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onMobileFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilterObj = COMMENT_FILTER.find((elem) => elem.key === event.target.value)!;

    setCommentFilter(newFilterObj);
  };

  const handleCommentSubmit = (data: Inputs) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between flex-row md:items-center">
        <h3 className="text-2xl font-bold">Comments & bids</h3>
        <select
          onChange={onMobileFilterChange}
          value={commentFilter.key}
          className="block md:hidden select select-bordered"
        >
          {COMMENT_FILTER.map((elem) => {
            return (
              <option key={elem.key} value={elem.key} onSelect={() => setCommentFilter(elem)}>
                {elem.label}
              </option>
            );
          })}
        </select>
        <div className="hidden md:block join join-vertical sm:join-horizontal">
          {COMMENT_FILTER.map((elem) => {
            return (
              <button
                className={clsx(`btn join-item`, {
                  'bg-base-300': elem.key === commentFilter.key,
                })}
                key={elem.key}
                onClick={() => setCommentFilter(elem)}
              >
                {elem.label}
              </button>
            );
          })}
        </div>
      </div>
      <form onSubmit={handleSubmit(handleCommentSubmit)}>
        <fieldset>
          <div className="form-control px-3 py-2 rounded-lg bg-base-200">
            <label className="label">
              <span className="label-text">Your comment</span>
            </label>
            <textarea
              {...register('comment')}
              className="textarea textarea-bordered h-24 mb-2"
              placeholder="Please provide your comment"
            ></textarea>
            <button className={button({ className: 'self-end btn-sm' })}>
              <Icon name="paper-airplane" className="w-4 h-4" />
              <span>Post comment</span>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
