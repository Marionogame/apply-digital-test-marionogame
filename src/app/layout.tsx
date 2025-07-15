import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import App from './app';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Apply Digital Test',
  description: 'Frontend development test for Apply Digital',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex flex-col min-h-screen text-text-primary`}
      >
        <App>{children}</App>
      </body>
    </html>
  );
}
