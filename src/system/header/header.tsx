import React from 'react';
import Link from "next/link";

export const Header = () => {
  return (
    <div className="navbar shadow bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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
        <a className="btn">Log in</a>
      </div>
    </div>
  );
};
