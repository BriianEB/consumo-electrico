'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  BuildingOffice2Icon,
  ClipboardIcon,
  DocumentPlusIcon,
  HomeModernIcon,
  PresentationChartBarIcon,
  UsersIcon
} from '@heroicons/react/24/solid';

import Link from '@/_shared/components/Link';
import NavItem from './NavItem';
import NavSubsectionTitle from './NavSubsectionTitle';

function SideNav() {
  const pathname = usePathname();

  function isActive(route: string): boolean {
    return pathname === route;
  }

  return (
    <nav
      className="fixed top-0 left-0 w-64 h-full bg-white px-4 shadow-lg"
    >
      <div className="flex justify-center py-8">
        <Link href="/">
          <Image src="/atp-logo.png" alt="ATP Consultoría" width={169} height={62} />
        </Link>
      </div>

      <ul>
        <NavSubsectionTitle>General</NavSubsectionTitle>
        <NavItem href="/" Icon={PresentationChartBarIcon} name="Panel" active={isActive('/')} />
        <NavItem href="/capture" Icon={DocumentPlusIcon} name="Captura" active={isActive('/capture')} />
        <NavItem href="/reports" Icon={ClipboardIcon} name="Reportes" active={isActive('/reports')} />
        <NavSubsectionTitle>Gestión</NavSubsectionTitle>
        <NavItem href="/groups" Icon={BuildingOffice2Icon} name="Grupos" active={isActive('/groups')} />
        <NavItem href="/parks" Icon={HomeModernIcon} name="Parques" active={isActive('/parks')} />
        <NavItem href="/clients" Icon={UsersIcon} name="Clientes" active={isActive('/clients')} />
      </ul>
    </nav>
  );
}

export default SideNav;