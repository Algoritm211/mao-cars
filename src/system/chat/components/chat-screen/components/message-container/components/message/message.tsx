import { clsx } from 'clsx';
import React from 'react';
import Markdown from 'react-markdown';

import { messageDateFormatter } from '@/shared/utils';

import { messageMarkdownConfigComponents } from './message-markdown-config';

interface Props {
  isBot: boolean;
  message: string;
  messageDate: string;
}

export const Message: React.FC<Props> = ({ isBot, message, messageDate }) => {
  const displayDate = messageDateFormatter(new Date(messageDate));
  return (
    <div className={clsx('chat', isBot ? 'chat-start' : 'chat-end')}>
      {isBot && (
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Bot avatar" src="/ai-chat/images/bot-avatar.jpeg" />
          </div>
        </div>
      )}
      <div className="chat-header">
        <span className="me-1">{isBot ? 'MaoBot' : 'You'}</span>
        <time className="text-xs opacity-50" dateTime={displayDate}>
          {displayDate}
        </time>
      </div>
      <div className="chat-bubble">
        <Markdown components={messageMarkdownConfigComponents}>{message}</Markdown>
      </div>
    </div>
  );
};
