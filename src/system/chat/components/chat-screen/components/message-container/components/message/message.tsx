import { clsx } from 'clsx';
import React from 'react';

import { messageDateFormatter } from '@/shared/utils';

interface Props {
  isBot: boolean;
}

export const Message: React.FC<Props> = ({ isBot }) => {
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
        <span className="me-1">Obi-Wan Kenobi</span>
        <time className="text-xs opacity-50" dateTime={messageDateFormatter(new Date())}>
          {messageDateFormatter(new Date())}
        </time>
      </div>
      <div className="chat-bubble">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa doloremque earum
        error laboriosam numquam officiis quaerat quisquam quo rem. Accusantium ad aperiam, autem
        beatae cumque delectus doloremque dolorum error id iusto laboriosam maxime nesciunt non
        pariatur provident quaerat quasi quod quos ullam voluptatem! A ad ex nemo nobis nostrum?
      </div>
    </div>
  );
};
