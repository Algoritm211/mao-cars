import { useTranslations } from 'next-intl';
import React from 'react';

import { Comment } from '@/maocars-client/schemas';

import { Icon, Badge } from '@/shared/components';
import { currencyFormatter } from '@/shared/utils/currency-formatter/currency-formatter';
import { messageDateFormatter } from '@/shared/utils/date-formatter/date-formatter';

interface Props {
  comment: Comment;
  isOwner: boolean;
}

export const AuctionComment: React.FC<Props> = ({ comment, isOwner }) => {
  const t = useTranslations('Auction_Page.auction_details.auction_comments.comment');
  const { user } = comment;
  return (
    <div className="px-6 py-3 rounded-lg flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-2">
          <div className="avatar">
            <div className="w-6 rounded-full">
              <img src={user.photo || '/user/no-user.jpeg'} alt="Comment user photo" />
            </div>
          </div>
          <span className="font-bold">{user.username}</span>
          {isOwner && <Badge className="bg-purple-600 text-white" title={t('seller')} />}
          <p className="text-sm text-gray-600">
            <time dateTime={messageDateFormatter(new Date(comment.created_at))}>
              {messageDateFormatter(new Date(comment.created_at))}
            </time>
          </p>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-xs btn-outline btn-circle m-1">
            <Icon name="three-dots" className="w-4 h-4" />
          </div>
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>{t('edit')}</a>
            </li>
            <li>
              <a>{t('report')}</a>
            </li>
          </ul>
        </div>
      </div>
      {comment.type === 'text' && <p>{comment?.text}️</p>}
      {comment.type === 'bid' && (
        <Badge
          size="lg"
          className="bg-neutral text-white rounded"
          title={t('bid', { amount: currencyFormatter(comment?.amount as number) })}
        />
      )}
      <div className="flex gap-2">
        <button className="btn btn-sm btn-outline">
          <Icon name="heart" className="w-4 h-4" />
          {comment.upvotes}
        </button>
        <button className="btn btn-sm btn-outline">
          <Icon name="reply" className="w-4 h-4" />
          {t('reply')}
        </button>
      </div>
    </div>
  );
};
