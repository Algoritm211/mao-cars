import React from 'react';

interface Props {
  title: string;
}

export const FormTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-5 bg-purple-400 rounded-r" />
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
};
