import React from 'react';
import { CommentForm } from './components/comment-form/comment-form';
import {Comment} from "./components/comment/comment";

export const AuctionComments = () => {
  return (
    <div>
      <CommentForm />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};
