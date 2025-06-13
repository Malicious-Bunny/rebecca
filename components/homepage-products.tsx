import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';
import { getCollectionProducts } from 'lib/shopify';
import { Product } from 'lib/shopify/types';

function ProductCard({ product }: { product: Product }) {
  const featuredImage = product.featuredImage?.url;

  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <Link href={`/product/${product.handle}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-100">
              <span className="text-gray-400">No Image</span>
            </div>
          )}

          {/* Quick View Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100">
              Quick view
            </button>
          </div>

          {/* Status Badge */}
          <div className="absolute top-2 left-2">
            <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-800">
              Immediate shipping
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors">
            {product.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">
              ${product.priceRange.minVariantPrice.amount}
            </span>
            <button className="rounded-md bg-pink-600 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-pink-700">
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

function ProductSection({
  title,
  description,
  products,
  linkText,
  linkHref
}: {
  title: string;
  description: string;
  products: Product[];
  linkText: string;
  linkHref: string;
}) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href={linkHref}
            className="inline-flex items-center rounded-full bg-pink-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-pink-700"
          >
            {linkText}
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

async function AvailableBabiesSection() {
  const products = await getCollectionProducts({ collection: 'hidden-homepage-featured-items' });

  return (
    <ProductSection
      title="Available Babies"
      description="Immediate shipping - Don't wait any longer, let yourself be carried away by love at first sight"
      products={products}
      linkText="See All Available Babies"
      linkHref="/search"
    />
  );
}

async function BabiesOnOrderSection() {
  const products = await getCollectionProducts({ collection: 'hidden-homepage-featured-items' });

  return (
    <ProductSection
      title="The Rebecca's Reborns Family"
      description="Personalize the baby of your dreams, discover our beautiful collection"
      products={products}
      linkText="Discover Our Babies"
      linkHref="/search"
    />
  );
}

export function HomepageProducts() {
  return (
    <div className="bg-gray-50">
      <Suspense fallback={<div className="min-h-[400px] animate-pulse bg-gray-100" />}>
        <BabiesOnOrderSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[400px] animate-pulse bg-gray-100" />}>
        <AvailableBabiesSection />
      </Suspense>
    </div>
  );
}
