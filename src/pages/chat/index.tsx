import { GetServerSidePropsContext } from 'next';
import React from 'react';

import { Chat as ChatDetails } from '@/system/chat/chat';

const Chat = () => {
  return <ChatDetails />;
};

export default Chat;

export async function getServerSideProps(context: GetServerSidePropsContext<{ id: string }>) {
  return {
    props: {
      messages: (await import(`../../../messages/${context.locale}.json`)).default,
    },
  };
}
