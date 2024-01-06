import React from 'react';

import { MessageContainer } from '@/system/chat/components/chat-screen/components/message-container/message-container';

import { ChatForm } from './components/chat-form/chat-form';
import { PreviewScreen } from './components/preview-screen/preview-screen';

export const ChatScreen = () => {
  return (
    <div className="flex h-[calc(100vh-72px-132px-40px)] md:h-[calc(100vh-72px-68px-40px)] flex-col">
      <div className="flex-grow overflow-y-auto">
        {/*<PreviewScreen />*/}
        <MessageContainer />
      </div>
      <div>
        <ChatForm />
      </div>
    </div>
  );
};
