import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import { button, Icon } from '@/shared/components';

import { Message } from './components/message/message';
import messagesEng from './mocks-messages/eng-messages.json';
import messagesUa from './mocks-messages/ua-messages.json';

const generateMessages = (messages: typeof messagesUa) => {
  return messages.map((elem) => (
    <Message
      key={elem.id}
      isBot={elem.type === 'bot'}
      message={elem.message}
      messageDate={elem.created_at}
    />
  ));
};

export const MessageContainer = () => {
  const router = useRouter();
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const [isShowScrollToBottom, setIsShowScrollToBottom] = useState(false);

  const messagesArr = router.locale === 'en-US' ? messagesEng : messagesUa;
  const messages = generateMessages(messagesArr);

  useEffect(() => {
    // Initial scroll to bottom when you are entering to the page
    handleScrollToBottom('instant');
  }, []);

  useEffect(() => {
    const chatObserver = new IntersectionObserver(
      ([entry]) => {
        setIsShowScrollToBottom(!entry.isIntersecting);
      },
      { threshold: 0.25 }
    );
    chatObserver.observe(chatBottomRef.current!);

    return () => {
      chatObserver.disconnect();
    };
  }, []);

  const handleScrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior, block: 'nearest', inline: 'start' });
    }
  };

  return (
    <div className="overflow-y-scroll shadow-inner mx-1 px-2 max-h-full lg:mx-0 relative">
      {messages}

      <div ref={chatBottomRef} className="invisible h-1"></div>
      {isShowScrollToBottom && (
        <button
          onClick={() => handleScrollToBottom()}
          className={button({ className: 'btn-circle sticky bottom-2 left-[100%] mr-2' })}
        >
          <Icon name="arrow-down" className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
