import React, {useEffect, useState} from 'react';

interface Props {
  endDate: Date
}

export const Timer: React.FC<Props> = ({endDate}) => {
  const [time, setTime] = useState(new Date(endDate).getTime());

  useEffect(() => {
    let countdown: NodeJS.Timeout = 0 as unknown as NodeJS.Timeout;

    if (typeof window !== 'undefined') {
      countdown = setInterval(() => {
        setTime((prevTime) => {
          const newTime = new Date(prevTime - 1000).getTime();
          return newTime;
        });
      }, 1000);
    }


    if (time === 0) {
      clearInterval(countdown);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [time]);

  return (
    <time suppressHydrationWarning>{new Date(time).toLocaleTimeString()}</time>
  );
};
