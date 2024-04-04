'use client';

import { headerLinks } from"../../constants/index"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'


const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-around flex w-full flex-col justify-center items-center gap-x-10 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${isActive && 'text-zenseGray'} font-sans py-1 px-1 rounded-lg bg-zinc-700/5  text-slate-200 hover:bg-red-900 hover:border-2 font-black uppercase text-2xl flex-center p-2 whitespace-nowrap lg:text-3xl`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>

        );
      })}
    </ul>
  )
}

export default NavItems