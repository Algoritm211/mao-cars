import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { AuctionComment } from '@/system/auction-details/components/auction-comments-section/components/aunction-comment/auction-comment';

import { useGetCommentsByAuctionId } from '@/maocars-client/maocars';
import { GetCommentsByAuctionIdFilter } from '@/maocars-client/schemas';

import { EntityContainer, Loader } from '@/shared/components';

import { CommentForm } from './components/comment-form/comment-form';

interface Props {
  sellerId: string;
}

export const AuctionComments: React.FC<Props> = ({ sellerId }) => {
  const router = useRouter();
  const t = useTranslations('Auction_Page.auction_details.auction_comments');
  const [auctionCommentFilter, setAuctionCommentFilter] =
    useState<GetCommentsByAuctionIdFilter>('newest');
  const commentsQuery = useGetCommentsByAuctionId(router.query?.id as string, {
    filter: auctionCommentFilter,
  });
  return (
    <div>
      <CommentForm
        auctionCommentFilter={auctionCommentFilter}
        setAuctionCommentFilter={setAuctionCommentFilter}
      />
      <EntityContainer
        query={commentsQuery}
        customLoading={<Loader loaderTitle={t('loading_comments')} size="lg" />}
      >
        {(comments) => {
          return comments.comments_and_bids.map((comment) => {
            return (
              <AuctionComment
                key={comment.id}
                comment={comment}
                isOwner={sellerId === comment.user.id}
              />
            );
          });
        }}
      </EntityContainer>
    </div>
  );
};
