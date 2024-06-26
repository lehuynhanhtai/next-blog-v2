import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '../providers/AuthProvider';
import { Toaster } from 'sonner';
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
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
