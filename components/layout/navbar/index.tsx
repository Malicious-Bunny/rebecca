import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

// Minimal navigation menu inspired by Blanca Padel
const customMenu = [
  { title: 'Dolls', path: '/search/dolls' },
  { title: 'Accessories', path: '/search/accessories' },
  { title: 'Toys', path: '/search/toys' },
  { title: 'About', path: '/pages/about' }
];

export async function Navbar() {

  return (
    <nav className="relative flex items-center justify-between bg-white p-4 md:p-6 border-b border-gray-100 lg:px-8 dark:bg-neutral-900 dark:border-neutral-800 transition-colors">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={customMenu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-2/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-4 md:mr-8 flex w-full items-center justify-center md:w-auto"
          >
            <div className="text-lg md:text-xl font-light tracking-tight text-gray-900 dark:text-gray-100 md:hidden lg:block transition-colors">
              {SITE_NAME}
            </div>
          </Link>
          <ul className="hidden gap-6 md:gap-8 text-sm md:flex md:items-center">
            {customMenu.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  prefetch={true}
                  className="text-gray-600 dark:text-gray-400 font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-100"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden justify-end md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
