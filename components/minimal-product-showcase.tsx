import { getCollectionProducts, getProducts } from 'lib/shopify';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

function BlancaProductCard({ product }: { product: Product }) {
  const featuredImage = product.featuredImage?.url;
  const price = parseFloat(product.priceRange.minVariantPrice.amount);

  return (
    <div className="group">
      <Link href={`/product/${product.handle}`} className="block">
        {/* Product Images */}
        <div className="aspect-[3/4] bg-gray-50 dark:bg-neutral-800 overflow-hidden rounded-lg mb-4 md:mb-6 relative transition-colors">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt={product.title}
              width={600}
              height={800}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 dark:bg-neutral-700 flex items-center justify-center transition-colors">
              <span className="text-gray-400 dark:text-gray-500">No Image</span>
            </div>
          )}

          {/* Badge if needed */}
          <div className="absolute top-3 md:top-4 left-3 md:left-4">
            <svg width="14" height="14" viewBox="0 0 16 16" className="text-gray-600 dark:text-gray-400 md:w-4 md:h-4">
              <path fill="currentColor" d="M8 1l2.5 5 5.5.5-4 4 1 5.5L8 13l-5 2.5 1-5.5-4-4 5.5-.5z"/>
            </svg>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
            {product.title}
          </h2>
          <p className="text-gray-900 dark:text-gray-100 font-medium text-base md:text-lg mb-3 md:mb-4 transition-colors">
            ${price > 0 ? price.toFixed(2) : 'Contact for price'}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 transition-colors">
            {product.description || "Handcrafted with artisan quality and authentic details."}
          </p>
        </div>
      </Link>
    </div>
  );
}

async function FeaturedProducts() {
  // Try to get featured products, fallback to general products if no featured collection exists
  let products;
  try {
    products = await getCollectionProducts({ collection: 'carousel' });
    // If no products in featured collection, get general products
    if (products.length === 0) {
      products = await getProducts({});
    }
  } catch {
    products = await getProducts({});
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12">
      {products.slice(0, 4).map((product) => (
        <BlancaProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export function MinimalProductShowcase() {
  return (
    <section className="bg-white dark:bg-neutral-900 py-16 md:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
            Featured dolls
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 dark:text-gray-100 mb-6 md:mb-8 px-4 transition-colors">
            Find your perfect fit
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 px-4 transition-colors">
            Made from the highest quality materials and latest techniques used by professional
            reborn artists for a fraction of the price.
          </p>
          <Link
            href="/search"
            className="inline-block text-gray-900 dark:text-gray-100 font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b border-gray-900 dark:border-gray-100 hover:border-gray-600 dark:hover:border-gray-300"
          >
            View all dolls
          </Link>
        </div>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 dark:bg-neutral-700 aspect-[3/4] mb-4 md:mb-6 rounded-lg"></div>
                  <div className="space-y-2">
                    <div className="h-5 md:h-6 bg-gray-200 dark:bg-neutral-700 rounded w-32"></div>
                    <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-20"></div>
                    <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-24"></div>
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <FeaturedProducts />
        </Suspense>
      </div>
    </section>
  );
}
