import { Components } from 'react-markdown';

import { Icon } from '@/shared/components';

export const messageMarkdownConfigComponents: Components = {
  li: ({ children }) => {
    return <li className="list-decimal list-inside">{children}</li>;
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
