import React from 'react';
import Link from "next/link";
import {Icon} from "@/shared/components/icon/icon";
import {LoginModal} from "@/auth/components/login-modal/login-modal";

export const Header = () => {
  const isAuthenticated = true;
  return (
    <div className="navbar shadow bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Icon name={'menu-bars'} className='w-5 h-5'/>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Auctions</a></li>
            <li><a className='border rounded-xl bg-accent'>Sell your car</a></li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" href='/'>Mao Cars</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Auctions</a></li>
          <li className='border rounded-xl bg-accent font-bold'><a>Sell your car</a></li>
          <li><a>About us</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        {isAuthenticated ? (
          <>
            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className="btn m-1 bg-transparent border-none">
                <span className='font-bold mr-2'>Alex</span>
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="/user/mock-user-photo.jpeg"  alt='The photo of the user'/>
                  </div>
                </div>
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href='/account'>User profile</Link></li>
                <li><Link href='/account/listings'>Listings</Link></li>
              </ul>
            </div>
          </>
        ) : (
          <LoginModal>
            {(toggleModal) => {
              return (
                <button onClick={toggleModal} className="btn">Log in</button>
              )
            }}
          </LoginModal>
        )}
      </div>
    </div>
  );
};
