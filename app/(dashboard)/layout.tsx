import '@/globals.css';

import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';

import Header from './_components/header/Header';
import SideNav from './_components/sidenav/SideNav';
import ProgressBar from '@/_shared/components/ProgressBar';

type DashboardLayoutProps = {
  children: ReactNode;
};

const roboto = Roboto_Flex({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    template: '%s | Consumo Eléctrico',
    default: 'Consumo Eléctrico'
  }
};

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <html>
      <body className={`${roboto.className} bg-gray-200 text-sm text-slate-980`}>
        <ProgressBar />
        <div className="relative">
          <Header />

          <SideNav />

          <main className="ml-64 p-6">
            {children}
          </main>
        </div>

        <div id="modal-container"></div>
        <div id="popup-container"></div>
      </body>
    </html>
  );
}

export default DashboardLayout;