type CommentMessageLabel =
  `filter.${keyof Messages['Auction_Page']['auction_details']['auction_comments']['filter']}`;

interface CommentFilterEntity {
  key: string;
  label: CommentMessageLabel;
}
export const COMMENT_FILTER: Array<CommentFilterEntity> = [
  { key: 'newest', label: 'filter.newest' },
  { key: 'most_upvoted', label: 'filter.most_upvoted' },
  { key: 'seller_comments', label: 'filter.seller_comments' },
  { key: 'bid_history', label: 'filter.bid_history' },
];
