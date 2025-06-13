import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <div className="group relative">
            {/* Image Container */}
            <Link
              className="relative block aspect-[3/4] overflow-hidden rounded-lg"
              href={`/product/${product.handle}`}
              prefetch={true}
            >
              <GridTileImage
                alt={product.title}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                showQuickView={true}
              />
            </Link>

            {/* Product Info */}
            <div className="mt-4 space-y-2">
              <Link href={`/product/${product.handle}`}>
                <h3 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-1">
                  {product.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description || "Beautiful handcrafted reborn doll"}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">
                  ${product.priceRange.minVariantPrice.amount}
                </span>
                <button className="rounded-md bg-pink-600 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-pink-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </Grid.Item>
      ))}
    </>
  );
}
