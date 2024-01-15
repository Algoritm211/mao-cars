import { Components } from 'react-markdown';

import { Icon } from '@/shared/components';

export const markdownTextSectionConfig: Components = {
  li: ({ children }) => {
    return <li className="list-disc list-inside my-1">{children}</li>;
  },
  a: ({ children, href }) => {
    return (
      <a href={href} className="link">
        {children}
        <Icon name="link" className="w-3 h-3 mx-1 inline" />
      </a>
    );
  },
};
