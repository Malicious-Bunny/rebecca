import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { GridTileImage } from 'components/grid/tile';
import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductProvider } from 'components/product/product-context';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import ImageComponent from 'next/image';

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage(props: { params: Promise<{ handle: string }> }) {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />

      <div className="bg-white">
        {/* Product Details */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-start">
            {/* Image Gallery */}
            <div>
              <Suspense
                fallback={
                  <div className="aspect-square w-full overflow-hidden minimal-rounded bg-gray-100" />
                }
              >
                <Gallery
                  images={product.images.slice(0, 5).map((image: Image) => ({
                    src: image.url,
                    altText: image.altText
                  }))}
                />
              </Suspense>
            </div>

            {/* Product Info */}
            <div className="mt-12 lg:mt-0">
              <Suspense fallback={null}>
                <ProductDescription product={product} />
              </Suspense>
            </div>
          </div>

          {/* You might also like */}
          <RelatedProducts id={product.id} />
        </div>
      </div>
      <Footer />
    </ProductProvider>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="mt-24 pt-16 border-t border-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-light text-gray-900 mb-4">Recommendations</h2>
        <p className="text-lg text-gray-600">You might also like these dolls</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-16">
        {relatedProducts.slice(0, 3).map((product) => (
          <div key={product.handle} className="group">
            <Link href={`/product/${product.handle}`} className="block">
              <div className="aspect-[3/4] bg-gray-50 overflow-hidden rounded-lg mb-6 relative">
                {product.featuredImage?.url ? (
                  <ImageComponent
                    src={product.featuredImage.url}
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
              </div>

              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {product.title}
                </h4>
                <p className="text-gray-900 font-medium text-lg mb-4">
                  ${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}
                </p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {product.description || "Handcrafted with artisan quality and authentic details."}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
