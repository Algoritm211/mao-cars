import React, {PropsWithChildren} from 'react';
import {Footer} from "@/system/footer/footer";
import {Header} from "@/system/header/header";

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='container flex-grow mx-auto'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
