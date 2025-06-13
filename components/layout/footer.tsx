import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="bg-gray-900 dark:bg-neutral-950 text-white transition-colors">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="text-lg md:text-xl font-light tracking-tight">
                {SITE_NAME}
              </span>
            </div>
            <ul className="space-y-1 md:space-y-2 text-sm text-gray-400 dark:text-gray-500">
              <li>Dolls</li>
              <li>Handcrafted</li>
              <li>Lifelike</li>
              <li>Intentional</li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-sm font-medium mb-3 md:mb-4">Explore</h3>
            <ul className="space-y-1 md:space-y-2 text-sm text-gray-400 dark:text-gray-500">
              <li>
                <Link href="/search/dolls" className="hover:text-white transition-colors">
                  Dolls
                </Link>
              </li>
              <li>
                <Link href="/search/accessories" className="hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/search/custom-orders" className="hover:text-white transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link href="/pages/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-medium mb-3 md:mb-4">Contact</h3>
            <ul className="space-y-1 md:space-y-2 text-sm text-gray-400 dark:text-gray-500">
              <li>
                <a href="mailto:hello@rebeccasreborns.com" className="hover:text-white transition-colors">
                  hello@rebeccasreborns.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-medium mb-3 md:mb-4">Legal</h3>
            <ul className="space-y-1 md:space-y-2 text-sm text-gray-400 dark:text-gray-500">
              <li>
                <Link href="/policies/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800 dark:border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 dark:text-gray-500 mb-4 md:mb-0">
              &copy; {currentYear} {copyrightName}. All rights reserved.
            </p>
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
