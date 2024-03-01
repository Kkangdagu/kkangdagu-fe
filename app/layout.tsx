import '@/styles/global.css';

import type { Metadata } from 'next';

import Providers from './StoreProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className="w-full h-full flex justify-center">{children}</body>
      </html>
    </Providers>
  );
}
