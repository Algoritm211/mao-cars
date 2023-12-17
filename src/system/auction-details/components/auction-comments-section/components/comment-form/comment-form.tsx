import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { COMMENT_FILTER } from '@/system/auction-details/components/auction-comments-section/components/comment-form/models/form-constants';

import { useGetCommentsByAuctionId } from '@/maocars-client/maocars';
import { GetCommentsByAuctionIdFilter } from '@/maocars-client/schemas';

import { Icon, button } from '@/shared/components';

interface Inputs {
  comment: string;
}

interface Props {
  auctionCommentFilter: GetCommentsByAuctionIdFilter;
  setAuctionCommentFilter: (filter: GetCommentsByAuctionIdFilter) => void;
}

export const CommentForm: React.FC<Props> = ({ setAuctionCommentFilter, auctionCommentFilter }) => {
  const t = useTranslations('Auction_Page.auction_details.auction_comments');

  const [commentFilter, setCommentFilter] = useState(() => {
    return COMMENT_FILTER.find((elem) => elem.key === auctionCommentFilter)!;
  });

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onMobileFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilterObj = COMMENT_FILTER.find((elem) => elem.key === event.target.value)!;

    setCommentFilter(newFilterObj);
  };

  useEffect(() => {
    setAuctionCommentFilter(commentFilter.key);
  }, [commentFilter, setAuctionCommentFilter]);

  const handleCommentSubmit = (data: Inputs) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between flex-row md:items-center">
        <h3 className="text-2xl font-bold">{t('comments_and_bids')}</h3>
        <select
          onChange={onMobileFilterChange}
          value={commentFilter.key}
          className="block md:hidden select select-bordered"
        >
          {COMMENT_FILTER.map((elem) => {
            return (
              <option key={elem.key} value={elem.key} onSelect={() => setCommentFilter(elem)}>
                {t(elem.label)}
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
                {t(elem.label)}
              </button>
            );
          })}
        </div>
      </div>
      <form onSubmit={handleSubmit(handleCommentSubmit)}>
        <fieldset>
          <div className="form-control px-3 py-2 rounded-lg bg-base-200">
            <label className="label">
              <span className="label-text">{t('your_comment')}</span>
            </label>
            <textarea
              {...register('comment')}
              className="textarea textarea-bordered h-24 mb-2"
              placeholder={t('post_comment_placeholder')}
            ></textarea>
            <button className={button({ className: 'self-end btn-sm' })}>
              <Icon name="paper-airplane" className="w-4 h-4" />
              <span>{t('post_comment')}</span>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
