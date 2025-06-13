import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export async function Carousel() {
  // Show trending products on homepage
  const products = await getCollectionProducts({ collection: 'trending' });

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[var(--color-neutral-light)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-light text-[var(--color-primary)]">
            Trending Products
          </h2>
          <p className="text-lg text-[var(--color-text-light)]">
            Discover what's popular right now
          </p>
        </div>
        <div className="w-full overflow-x-auto pb-6 pt-1">
          <ul className="flex animate-carousel gap-6">
            {carouselProducts.map((product, i) => (
              <li
                key={`${product.handle}${i}`}
                className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow md:w-1/3"
              >
                <Link href={`/product/${product.handle}`} className="relative h-full w-full">
                  <GridTileImage
                    alt={product.title}
                    label={{
                      title: product.title,
                      amount: product.priceRange.maxVariantPrice.amount,
                      currencyCode: product.priceRange.maxVariantPrice.currencyCode
                    }}
                    src={product.featuredImage?.url}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
