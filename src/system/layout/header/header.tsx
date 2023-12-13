import React from 'react';
import Link from 'next/link';
import { Icon } from '@/shared/components/icon/icon';
import { LoginModal } from '@/auth/components/login-modal/login-modal';
import { LocaleToggle } from './components/locale-toggle/locale-toggle';
import { useTranslations } from 'next-intl';

export const Header = () => {
  const isAuthenticated = true;
  const t = useTranslations('Layout.header');
  return (
    <div className="navbar shadow bg-base-100">
      <div className="navbar-start">
        <label tabIndex={0} htmlFor="menu-drawer" className="btn btn-ghost lg:hidden">
          <Icon name="menu-bars" className="w-5 h-5" />
        </label>
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          Mao Cars
        </Link>
        <LocaleToggle />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>{t('menu.auctions')}</a>
          </li>
          <li className="border rounded-xl bg-accent font-bold">
            <Link href="/sell-car/submit">{t('menu.sell_car')}</Link>
          </li>
          <li>
            <a>{t('menu.about_us')}</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {isAuthenticated ? (
          <>
            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className="btn m-1 bg-transparent border-none">
                <span className="font-bold mr-2 hidden md:inline">Alexey_Horbunov</span>
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="/user/mock-user-photo.jpeg" alt="The photo of the user" />
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/account">{t('profile')}</Link>
                </li>
                <li>
                  <Link href="/account/listings">{t('listings')}</Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <LoginModal>
            {(toggleModal) => {
              return (
                <button onClick={toggleModal} className="btn">
                  {t('login')}
                </button>
              );
            }}
          </LoginModal>
        )}
      </div>
    </div>
  );
};
