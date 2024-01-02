import Link from 'next/link';
import React from 'react';

import { Icon } from '@/shared/components';

export const AIChatButton = () => {
  return (
    <Link
      href="/chat"
      className="btn btn-lg bg-purple-800 hover:bg-purple-600
      z-20 text-white border-transparent sticky bottom-10 left-10"
    >
      <div className="flex items-center gap-2 animate-pulse">
        <Icon name="artificial-intelligence" className="w-8 h-8 fill-white" />
        <span>Use AI</span>
      </div>
    </Link>
  );
};
