import type { Metadata } from 'next';
import './globals.css';

import { ConvexClientProvider } from './ConvexClientProvider';
import Header from '@/components/navbar/Header';
import Footer from '@/components/footer/Footer';

import localFont from 'next/font/local';

const aammufkF = localFont({
  src: [
    {
      path: './fonts/aammufkF.ttf',
    },
  ],
  variable: '--font-aammufkF',
  display: 'swap',
});

const mvtyper = localFont({
  src: [
    {
      path: './fonts/mvtyper.ttf',
    },
  ],
  variable: '--font-mvtyper',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Secretariat of the Dhevvadhoo Council',
  description: 'Secretariat of the Dhevvadhoo Council',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aammufkF.variable} ${mvtyper.variable}`}>
        <ConvexClientProvider>
          <Header />
          {children}
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
