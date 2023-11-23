import React from 'react';

interface Props {
  title: string,
  content: string,
}

export const TextSection: React.FC<Props> = ({title, content}) => {
  return (
    <div className='py-2'>
      <h4 className='text-2xl font-bold'>
        {title}
      </h4>
      <div className='my-2'>
        {content}
      </div>
    </div>
  );
};
