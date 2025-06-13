import { Navbar } from 'components/layout/navbar';
import { ThemeProvider } from 'components/theme-provider';
import { baseUrl } from 'lib/utils';
import { DM_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans'
});

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  }
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body className="selection:bg-gray-200 selection:text-gray-900 font-body dark:selection:bg-gray-700 dark:selection:text-gray-200">
        <ThemeProvider defaultTheme="system" storageKey="rebecca-theme">
          <Navbar />
          <main>
            {children}
            <Toaster closeButton />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
