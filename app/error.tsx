'use client';

import Link from 'next/link';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          {/* Error Icon */}
          <div className="mb-8">
            <svg width="64" height="64" viewBox="0 0 64 64" className="mx-auto text-gray-400">
              <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M32 16v16M32 40h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-8">
            Something went wrong
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            There was an issue with our storefront. This could be a temporary issue, please try your action again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="inline-block bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors rounded-lg"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-block border border-gray-900 text-gray-900 px-8 py-3 font-medium hover:bg-gray-50 transition-colors rounded-lg"
            >
              Back to Home
            </Link>
          </div>

          {/* About section */}
          <div className="mt-24 pt-16 border-t border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-8">About us</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Made with the same technology used by professional reborn artists for a fraction of the price.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="mb-6">
                  <svg width="50" height="38" viewBox="0 0 50 38" className="mx-auto">
                    <path d="M25 0L35 15L50 17L37.5 30L40 45L25 37L10 45L12.5 30L0 17L15 15L25 0Z" fill="currentColor" className="text-gray-900"/>
                  </svg>
                </div>
                <p className="text-gray-600">
                  Our dolls feature meticulous craftsmanship, perfect for those who prefer artistry with authentic details
                </p>
              </div>
              <div>
                <div className="mb-6">
                  <svg width="47" height="34" viewBox="0 0 47 34" className="mx-auto">
                    <path d="M23.5 0L29 11L40 12.5L31 21.5L33.5 32.5L23.5 27L13.5 32.5L16 21.5L7 12.5L18 11L23.5 0Z" fill="currentColor" className="text-gray-900"/>
                  </svg>
                </div>
                <p className="text-gray-600">
                  All our products are suitable for collectors of all levels, from beginners to advanced enthusiasts
                </p>
              </div>
              <div>
                <div className="mb-6">
                  <svg width="39" height="47" viewBox="0 0 39 47" className="mx-auto">
                    <path d="M19.5 0L24 10L34 11L26 19L28 29L19.5 24L11 29L13 19L5 11L15 10L19.5 0Z" fill="currentColor" className="text-gray-900"/>
                  </svg>
                </div>
                <p className="text-gray-600">
                  Our dolls feature the highest quality materials including premium vinyl and mohair
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
