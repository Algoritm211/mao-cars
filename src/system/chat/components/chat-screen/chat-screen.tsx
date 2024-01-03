import React from 'react';

import { ChatForm } from './components/chat-form/chat-form';
import { PreviewScreen } from './components/preview-screen/preview-screen';

export const ChatScreen = () => {
  return (
    <div className="flex flex-col h-full">
      <PreviewScreen />
      <ChatForm />
    </div>
  );
};
