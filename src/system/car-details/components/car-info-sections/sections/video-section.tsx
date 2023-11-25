import React from 'react';

interface Props {
  title: string;
  content: string[];
}

export const VideoSection: React.FC<Props> = ({ content, title }) => {
  return (
    <div className="py-2">
      <h4 className="text-2xl font-bold">{title}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
        {content.map((elem) => {
          return <iframe className="w-full h-64 lg:h-80" key={elem} src={elem}></iframe>;
        })}
      </div>
    </div>
  );
};
