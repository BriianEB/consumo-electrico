import React, { useState } from 'react';
import Link from 'next/link';

type NavSubItemProps = {
  href: string;
  name: string;
  active?: boolean;
};

function NavSubItem({ href, name, active }: NavSubItemProps) {

  return (
    <li className="mb-2 first:mt-2 last:mb-0">
      <Link
        href={href}
        className={`
          relative flex items-center px-4 py-3 rounded transition-all duration-300
          ${active ? 'text-slate-980 font-bold' : 'text-slate-700'}
          hover:bg-slate-300/25
        `}
      >
        <div
          className={`
            ${active ? 'bg-blue-400 w-2 h-2 ml-1.5 mr-[1.375rem]' : 'bg-slate-700 w-1 h-1 ml-2 mr-6'}
            rounded-full
          `}
        />

        <span>{name}</span>
      </Link>
    </li>    
  );
}

export default NavSubItem;