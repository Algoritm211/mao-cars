import React from 'react';
import Markdown from 'react-markdown';

import { markdownTextSectionConfig } from './text-section-markdown-config';

interface Props {
  title: string;
  content: string;
}

export const TextSection: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="py-2">
      <h4 className="text-2xl font-bold">{title}</h4>
      <div className="my-2">
        <Markdown components={markdownTextSectionConfig}>{content}</Markdown>
      </div>
    </div>
  );
};
