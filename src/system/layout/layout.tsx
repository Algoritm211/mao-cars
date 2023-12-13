import React, { PropsWithChildren } from 'react';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const t = useTranslations('Layout.header');
  return (
    <div className="drawer">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content min-h-screen flex flex-col">
        <Header />
        <main className="container my-5 flex-grow mx-auto">{children}</main>
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="menu-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul tabIndex={0} className="menu p-4 w-72 min-h-full bg-base-200">
          <li>
            <Link href="/">{t('menu.auctions')}</Link>
          </li>
          <li>
            <Link className="border rounded-xl bg-accent" href="/sell-car/submit">
              {t('menu.sell_car')}
            </Link>
          </li>
          <li>
            <a>{t('menu.about_us')}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
