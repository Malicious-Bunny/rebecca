import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { defaultSort, sorting } from 'lib/constants';
import { Product } from 'lib/shopify/types';

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`
  };
}

function BlancaProductCard({ product }: { product: Product }) {
  const featuredImage = product.featuredImage?.url;
  const price = parseFloat(product.priceRange.minVariantPrice.amount);

  return (
    <div className="group">
      <Link href={`/product/${product.handle}`} className="block">
        {/* Product Images */}
        <div className="aspect-[3/4] bg-gray-50 overflow-hidden rounded-lg mb-6 relative">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt={product.title}
              width={600}
              height={800}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">No Image</span>
            </div>
          )}

          {/* Badge if needed */}
          <div className="absolute top-4 left-4">
            <svg width="16" height="16" viewBox="0 0 16 16" className="text-gray-600">
              <path fill="currentColor" d="M8 1l2.5 5 5.5.5-4 4 1 5.5L8 13l-5 2.5 1-5.5-4-4 5.5-.5z"/>
            </svg>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {product.title}
          </h2>
          <p className="text-gray-900 font-medium text-lg mb-4">
            ${price > 0 ? price.toFixed(2) : 'Contact for price'}
          </p>
          <p className="text-gray-600 text-sm line-clamp-2">
            {product.description || "Handcrafted with artisan quality and authentic details."}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header with Breadcrumb */}
        <div className="mb-16">
          <nav className="text-sm text-gray-500 mb-8">
            {collection.title}
          </nav>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-8">
            {collection.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {collection.description || 'Made from the highest quality materials and latest techniques used by professional reborn artists for a fraction of the price.'}
          </p>
        </div>

        {/* Filter/Sort Section */}
        <div className="flex items-center justify-between mb-12 pb-4 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Expertise</span>
            <span className="text-sm text-gray-600">Playstyle</span>
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
            {products.map((product) => (
              <BlancaProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* No results found */
          <div className="text-center py-16">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              No dolls found in this collection
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              This collection is currently empty. Please check back later or browse our other collections.
            </p>
            <Link
              href="/search"
              className="inline-block bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors rounded-lg"
            >
              View All Dolls
            </Link>
          </div>
        )}

        {/* About us section - only show if we have products */}
        {products.length > 0 && (
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
        )}
      </div>
    </div>
  );
}
