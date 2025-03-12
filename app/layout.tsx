import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ameer Ismail Photography',
  description: 'Professional Photography Portfolio',
  keywords: [
    'Ameer Ismail',
    'durban wedding photography',
    'wedding photoshoot',
    'wedding photography',
    'fashion photography',
    'creative photography',
    'photographer portfolio',
    'wedding portraits',
    'fashion editorial photography',
    'bridal photoshoot',
    'fashion model photography',
    'destination wedding photography',
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}