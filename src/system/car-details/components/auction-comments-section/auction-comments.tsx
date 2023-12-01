import React from 'react';
import { CommentForm } from './components/comment-form/comment-form';
import { Comment } from '@/maocars-client/schemas';
import { AuctionComment } from '@/system/car-details/components/auction-comments-section/components/aunction-comment/auction-comment';

interface Props {
  comments: Comment[];
  seller_id: string;
}

export const AuctionComments: React.FC<Props> = ({ comments, seller_id }) => {
  return (
    <div>
      <CommentForm />
      {comments.map((comment) => {
        return (
          <AuctionComment
            key={comment.id}
            comment={comment}
            isOwner={seller_id === comment.user.id}
          />
        );
      })}
    </div>
  );
};
