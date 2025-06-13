import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import { Suspense } from 'react';
import ChildrenWrapper from './children-wrapper';

export default function SearchLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Page Header */}
      <div className="bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-700 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl transition-colors">Available Babies</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
              Don't wait any longer, let yourself be carried away by love at first sight and choose your baby from our beautiful collection.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-700 p-6 mb-8 lg:mb-0 transition-colors">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4 transition-colors">Filters</h3>

              {/* Collections */}
              <div className="mb-6">
                <Collections />
              </div>

              {/* Sort */}
              <div>
                <FilterList list={sorting} title="Sort by" />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-4">
            <Suspense fallback={<div className="min-h-[400px] animate-pulse bg-gray-100 dark:bg-neutral-700 rounded-lg transition-colors" />}>
              <ChildrenWrapper>{children}</ChildrenWrapper>
            </Suspense>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
