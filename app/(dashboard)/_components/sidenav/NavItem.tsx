'use client';

import React, { useState } from 'react';

import Link from '@/_shared/components/Link';

type NavItemProps = {
  href: string;
  name: string;
  Icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;
  active?: boolean;
};

function NavItem({ href, name, Icon, active = false }: NavItemProps) {

  return (
    <li className="mb-2">
      <Link
        href={href}
        className={`
          relative flex items-center px-4 py-3 rounded transition-all duration-300
          ${active ? 'bg-blue-400/10 text-blue-400 font-bold hover:bg-blue-400/25' : 'text-slate-700 hover:bg-slate-300/25'}
        `}
      >
        <Icon className="inline w-5 h-5" />
        <span className="ml-4">{name}</span>
      </Link>
    </li>
  );
}

export default NavItem; 