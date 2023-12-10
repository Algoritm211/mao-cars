import React from 'react';
import { Icon } from '@/shared/components';
import { Comment } from '@/maocars-client/schemas';
import { commentDateFormatter } from '@/shared/utils/date-formatter/date-formatter';
import { currencyFormatter } from '@/shared/utils/currency-formatter/currency-formatter';

interface Props {
  comment: Comment;
  isOwner: boolean;
}

export const AuctionComment: React.FC<Props> = ({ comment, isOwner }) => {
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
          {isOwner && <div className="badge bg-purple-600 text-white">seller</div>}
          <p className="text-sm text-gray-600">
            <time dateTime={commentDateFormatter(new Date(comment.created_at))}>
              {commentDateFormatter(new Date(comment.created_at))}
            </time>
          </p>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-xs btn-outline btn-circle m-1">
            <Icon name="three-dots" className="w-4 h-4" />
          </div>
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Edit</a>
            </li>
            <li>
              <a>Report</a>
            </li>
          </ul>
        </div>
      </div>
      {comment.type === 'text' && <p>{comment?.text}️</p>}
      {comment.type === 'bid' && (
        <div className="badge badge-lg bg-neutral text-white rounded">
          Bid: {currencyFormatter(comment?.amount as number)}
        </div>
      )}
      <div className="flex gap-2">
        <button className="btn btn-sm btn-outline">
          <Icon name="heart" className="w-4 h-4" />
          {comment.upvotes}
        </button>
        <button className="btn btn-sm btn-outline">
          <Icon name="reply" className="w-4 h-4" />
          Reply
        </button>
      </div>
    </div>
  );
};
