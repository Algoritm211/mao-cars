import React, {PropsWithChildren} from 'react';
import AccountNavBar from "@/system/account/components/account-nav-bar/account-nav-bar";

export const AccountLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className='flex flex-col md:gap-2'>
      <div className='basis-full self-center'>
        <AccountNavBar />
      </div>
      <div className='flex-grow'>
        {children}
      </div>
    </div>
  );
};
