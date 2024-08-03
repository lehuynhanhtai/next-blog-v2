import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { Suspense } from 'react';

import NavBar from '@/components/NavBar';
import { DarkModeProvider } from '@/context/darkMode-context';
import Footer from '@/components/Footer';
import Loading from './loading';
import { AuthProvider } from '../providers/AuthProvider';
import './globals.css';
import BackToTop from '@/components/BackToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'S-BLOG - Mạng Xã Hội Chia Sẽ Quan Điểm Xã Hội Việt Nam',
  description: 'Mạng Xã Hội Viết Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkModeProvider>
          <AuthProvider>
            <NavBar />
            <div className="bg-white dark:bg-gray-700 flex-1">
              <Suspense fallback={<Loading />}>{children}</Suspense>
              <BackToTop />
            </div>
            <Footer />
          </AuthProvider>
        </DarkModeProvider>
        <Toaster
          richColors
          position="top-right"
          toastOptions={{
            style: {
              height: '20px',
              width: 'max-content',
              right: 0,
            },
          }}
        />
      </body>
    </html>
  );
}
