import React, { useEffect, useRef, useState } from 'react';

import { button, Icon } from '@/shared/components';

import { Message } from './components/message/message';

const MessagesArr = new Array(200)
  .fill(null)
  .map((elem, index) => <Message key={index} isBot={index % 2 === 0} />);

export const MessageContainer = () => {
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const [isShowScrollToBottom, setIsShowScrollToBottom] = useState(false);

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
      chatBottomRef.current.scrollIntoView({ behavior });
    }
  };

  return (
    <div className="overflow-y-scroll shadow-inner mx-1 px-2 max-h-full lg:mx-0 relative">
      {MessagesArr}

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
