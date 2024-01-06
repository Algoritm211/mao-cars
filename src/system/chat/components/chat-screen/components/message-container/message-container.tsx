import React, { useEffect, useRef, useState } from 'react';

import { Icon } from '@/shared/components';

const MessagesArr = new Array(20).fill(null).map((elem, index) => (
  <div key={index} className="bg-blue-300 w-full h-12 my-2">
    {index}
  </div>
));

export const MessageContainer = () => {
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const [isShowScrollToBottom, setIsShowScrollToBottom] = useState(false);

  useEffect(() => {
    // Initial scroll to bottom when you are entering to the page
    handleScrollToBottom('instant');
  }, []);

  useEffect(() => {
    const chatObserver = new IntersectionObserver(([entry]) => {
      setIsShowScrollToBottom(!entry.isIntersecting);
    });
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
    <div className="overflow-y-scroll mx-1 max-h-full lg:mx-0 relative">
      {MessagesArr}

      <div ref={chatBottomRef} className="invisible"></div>
      {isShowScrollToBottom && (
        <button
          onClick={() => handleScrollToBottom()}
          className="btn btn-md btn-circle sticky bottom-2 left-[100%] mr-2"
        >
          <Icon name="arrow-down" className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
