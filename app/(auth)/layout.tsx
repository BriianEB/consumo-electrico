import '@/globals.css';

import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';

type RootLayoutProps = {
  children: React.ReactNode;
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

export default function AuthLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className={`${roboto.className} bg-gray-200 text-sm text-slate-980`}>
        {children}
      </body>
    </html>
  )
}
